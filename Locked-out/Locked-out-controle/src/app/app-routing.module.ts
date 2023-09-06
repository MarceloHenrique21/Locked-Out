import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoComponent } from './historico/historico.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { BloquearUrlComponent } from './bloquear-url/bloquear-url.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { SairComponent } from './sair/sair.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tela-inicial'
  },
 
  {
    path: 'tela-inicial', 
    
    component: TelaInicialComponent
  },

  {
    path: 'historico', 
    component: HistoricoComponent
  },

  {
    path: 'bloquear-url', 
    component: BloquearUrlComponent
  },

  {
    path: 'configuracoes', 
    component: ConfiguracoesComponent
  },

  {
    path: 'sair', 
    component: SairComponent
  },

  
{
  path: '**',
  redirectTo: 'tela-inicial'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



