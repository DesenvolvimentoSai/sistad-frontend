import {Component, OnDestroy, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NgxMaskModule } from 'ngx-mask-2';

declare var $;

@Component({
  selector: 'sistad-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ NgxMaskModule ],

})


export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild('cpf', {read: ElementRef}) cpf: ElementRef;
  // public mask: string;

  constructor() {}
  telMask= '(00) 0000-0000';
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
    // let valor = document.getElementById('cpf').value;
    // routerLink]="'/login2'"
    // const value = this.cpf.nativeElement.value;

    // this.tel.nativeElement.valueChanges.map(valor => valor.length).subscribe(length=>{
    //   if(length > 10){
    //      this.telMask = '(00) 0 0000-0000';
    //    }else{
    //      this.telMask = '(00) 0000-0000';
    //   }
    // });
  }

  // cpfcnpjmask() {
  //   const value = this.cpf.nativeElement.value;
  //   if(value.length <= 14) {
  //     this.mask = '00.000.000/0000-00';
  //   }
  //   else {
  //     this.mask = '00.000.0000-00';
  //   }
  // }

}
