import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoGrandeComponent } from './botao-grande/botao-grande.component';
import { ButtonModule } from 'primeng/components/button/button';


@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [BotaoGrandeComponent],
  exports: [BotaoGrandeComponent]
})
export class BotoesModule { }
