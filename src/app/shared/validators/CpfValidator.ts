import { AbstractControl } from '@angular/forms';

export class CpfValidator {

  static validate(c: AbstractControl): { [p: string]: any } {
    const cpf = c.value ? c.value.replace(/[^\d]+/g, '') : '';

    if (cpf === '') {
      return { result: false };
    }

    // Elimina CPFs invalidos conhecidos
    if (cpf.length !== 11 ||
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999') {
      return { result: false };
    }
    // Valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i++) {
      // tslint:disable-next-line: radix
      add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    // tslint:disable-next-line: radix
    if (rev !== parseInt(cpf.charAt(9))) {
      return { result: false };
    }

    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++) {
      // tslint:disable-next-line: radix
      add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    // tslint:disable-next-line: radix
    if (rev !== parseInt(cpf.charAt(10))) {
      return { result: false };
    }
    return null;
  }
}
