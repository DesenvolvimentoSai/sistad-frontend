import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SigpesldapService } from '../../../services/sigpesldap.service';

declare var $;

@Component({
  selector: 'sistad-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
  providers: [ SigpesldapService ]
})
export class Login2Component implements OnInit {

  @ViewChild('senha', {read: ElementRef}) senha: ElementRef;
  @ViewChild('modulo', {read: ElementRef}) modulo: ElementRef;

  public cpf: any;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private sigpesldapService: SigpesldapService,
  ) {
    this.cpf = this.activatedRoute.snapshot.params.cpf;
  }

  ngOnInit() {
    $('body').addClass('hold-transition login-page');
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
    this.validarCPF();
  }
  validarCPF(){
    const rota  = this.router.url.split('/');
    const cpf = rota[2].replace(/[^\d]+/g, '');
    console.log(cpf);
    // tslint:disable-next-line: no-unused-expression
    this.sigpesldapService.getCPFSaram(cpf).subscribe(data => {
      console.log(data);
      console.log(data.status);
      if (data.status !== 200){
        this.router.navigate([`/login/${1}`]);
      }
    },
    error => {
      // tslint:disable-next-line: no-debugger
      debugger;
      console.log(error.message);
    }
    );
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

  validarSenha(){
    const modulo = this.modulo.nativeElement.value;
    const senha = this.senha.nativeElement.value;
    this.sigpesldapService.validarLogin(this.cpf, modulo, senha).subscribe(data => {
      console.log(data);
      console.log(data.status);
      if (data.status !== 200){
        this.router.navigate([`/login/${2}`]);
      } else {
        this.router.navigate(['/members']);
      }
    },
    error => {
      // tslint:disable-next-line: no-debugger
      debugger;
      console.log(error.message);
    }
    );
  }

}
