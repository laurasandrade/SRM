import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PainelgestaoComponent } from './painelgestao/painelgestao.component';
import { ContadigitalComponent } from './contadigital/contadigital.component';
import { RecebiveisComponent } from './recebiveis/recebiveis.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PainelgestaoComponent,
    ContadigitalComponent,
    RecebiveisComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
