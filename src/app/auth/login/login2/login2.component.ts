import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare var $;

@Component({
  selector: 'sistad-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  public cpf: any;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
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
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

  validarSenha(){
    this.router.navigate(['/members']);
  }

}
