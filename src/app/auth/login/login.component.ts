import {Component, OnDestroy, OnInit, ViewChild, ElementRef} from '@angular/core';
import { SigpesldapService } from '../../services/sigpesldap.service';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';

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
  }

  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

  validarCPFSaram(){
    const cpf = this.cpf.nativeElement.value;
    const valor = this.cpf.nativeElement.value.replace(/[^\d]+/g, '');
    // tslint:disable-next-line: no-unused-expression
    this.sigpesldapService.getCPFSaram(valor).subscribe(data => {
      (data.status === 200) ?
      this.router.navigate([`/login2/${cpf}`])
        :
        this.router.navigate([`/login/`]);
    });

    this.router.navigate([`/login2/${cpf}`]);
  }
}
