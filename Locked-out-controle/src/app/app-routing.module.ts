import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoComponent } from './historico/historico.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { BloquearUrlComponent } from './bloquear-url/bloquear-url.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { SairComponent } from './sair/sair.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { autorizadoGuard } from './guard/autorizado.guard';
import { NaoLogadoComponent } from './nao-logado/nao-logado.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tela-inicial'
  },
 
  {
    path: 'tela-inicial', 
    component: TelaInicialComponent,
    canActivate: [autorizadoGuard]
  },

  {
    path: 'historico', 
    component: HistoricoComponent,
    canActivate: [autorizadoGuard]
  },

  {
    path: 'bloquear-url', 
    component: BloquearUrlComponent,
    canActivate: [autorizadoGuard]
  },

  {
    path: 'configuracoes', 
    component:ConfiguracoesComponent,
    canActivate: [autorizadoGuard]
  },

  {
    path: 'ajuda', 
    component: AjudaComponent,
    canActivate: [autorizadoGuard]
  },

  {
    path: 'sair', 
    component: SairComponent,
    canActivate: [autorizadoGuard]
  },

  {
    path: 'NaoLogado', 
    component: NaoLogadoComponent,
    canActivate: [autorizadoGuard]
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



