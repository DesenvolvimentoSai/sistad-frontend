import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'sistad-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  constructor(
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

  validarSenha(){
    this.router.navigate(['/members']);
  }

}
