import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfPipe } from './cpf.pipe';
import { TelefonePipe } from './telefone.pipe';

@NgModule({
  declarations: [
    CpfPipe,
    TelefonePipe,
  ],
  providers: [
    CpfPipe,
    TelefonePipe
  ],
  imports: [ CommonModule ],
  exports: [
    CpfPipe,
    TelefonePipe
  ],
}) export class PipeModule { }

// export class PipeModule {
//   static forRoot() {
//     return {
//       ngModule: PipeModule, TelefonePipe,
//       providers: [PipeModule, TelefonePipe],
//     };
//   }
// }
