// Import de Modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { PessoasModule } from './pessoas/pessoas.module';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { FormsModule } from '@angular/forms';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ReactiveFormsModule } from '@angular/forms';

import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

// Import de Components
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { NavbarComponent } from './navbar/navbar.component';


// Import de Services/Providers
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { LancamentoService } from './lancamentos/lancamento.service';
import { PessoaService } from './pessoas/pessoa.service';
import { SegurancaRoutingModule } from './seguranca/seguranca-routing.module';
import { LoginComponent } from './seguranca/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageComponent,
    LoginComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    HttpClientModule,
    CurrencyMaskModule,
    InputMaskModule,
    FormsModule,
    NavegacaoModule,
    LancamentosModule,
    PessoasModule,
    CardModule,
    ConfirmDialogModule,
    SegurancaRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LancamentoService,
    PessoaService,
    ConfirmationService,
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * app.module.ts

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { SegurancaRoutingModule } from './seguranca/seguranca-routing.module';
registerLocaleData(localePt)

 providers: [{
    provide: LOCALE_ID,
    useValue: "pt-BR"
  }],
.html

currency:'BRL'
 */