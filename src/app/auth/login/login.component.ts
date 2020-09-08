import {Component, OnDestroy, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { SigpesldapService } from '../../services/sigpesldap.service';
import { CpfValidator } from '../../shared/validators/CpfValidator';

declare var $;

@Component({
  selector: 'sistad-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ SigpesldapService ],

})

export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild('cpf', {read: ElementRef}) cpf: ElementRef;

  constructor(
    private sigpesldapService: SigpesldapService,
    public router: Router
  ) {}

  ngOnInit() {
    $('body').addClass('hold-transition login-page');
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
    const rota  = this.router.url.split('/');
    if (rota[2] && rota[2] === '1') { alert('CPF inválido!'); }
    if (rota[2] && rota[2] === '2') { alert('Senha incorreta!'); }
  }

  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

  validarCPFSaram(){
    const cpf = this.cpf.nativeElement.value;
    const validarCPF = CpfValidator.validate(cpf);
    if (validarCPF){
      this.router.navigate([`auth/login2/${cpf}`], { skipLocationChange: false});
    }else { alert('CPF inválido!'); }
  }
}
