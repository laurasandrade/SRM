import { RouterModule, Routes } from '@angular/router';
import { PainelgestaoComponent } from './painelgestao/painelgestao.component';
import { ContadigitalComponent } from './contadigital/contadigital.component';
import { RecebiveisComponent } from './recebiveis/recebiveis.component';


const appRoutes: Routes  = [
  { path: '', component: PainelgestaoComponent },
  { path: 'painelgestao', component: PainelgestaoComponent },
  { path: 'contadigital', component: ContadigitalComponent },
  { path: 'recebiveis', component: RecebiveisComponent },  
];

export const routing = RouterModule.forRoot(appRoutes);