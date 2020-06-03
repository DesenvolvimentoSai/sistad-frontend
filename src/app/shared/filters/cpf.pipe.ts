import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCpf'
})

export class CpfPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
        if (value.length === 11) {
            return '*** . *** . *** - ' +
             + value.substr(9, 2);
        }
    }
  }
}
