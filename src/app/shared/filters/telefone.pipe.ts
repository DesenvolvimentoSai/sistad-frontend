import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: string): string {
    if (value) {

        if (value.length === 11) {
            return '(' + value.substr(0, 2) + ') '
            + value.substr(2, 5) + '-' + value.substr(7, 11);
        } else if (value.length === 10) {
            return '(' + value.substr(0, 2) + ') '
                + value.substr(2, 4) + '-' + value.substr(6, 10);
        } else {
            return value;
        }
    }

}

}
