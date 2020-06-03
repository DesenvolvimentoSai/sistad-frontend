import { AbstractControl } from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
        const password = AC.get('senha').value; // to get value in input tag
        const confirmPassword = AC.get('confirmacaoSenha').value; // to get value in input tag
        if (password !== confirmPassword) {
            AC.get('confirmacaoSenha').setErrors({ MatchPassword: true });
        } else {
            return null;
        }
    }
}
