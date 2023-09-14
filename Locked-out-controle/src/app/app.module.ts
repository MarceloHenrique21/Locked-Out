import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { BloquearUrlComponent } from './bloquear-url/bloquear-url.component';
import { HistoricoComponent } from './historico/historico.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { SairComponent } from './sair/sair.component';
import { MenuComponent } from './menu/menu.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { BodyComponent } from './body/body.component';
import { autorizadoGuard } from './guard/autorizado.guard';
import { NaoLogadoComponent } from './nao-logado/nao-logado.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PieChartComponent } from './shared/pie-chart/pie-chart.component';
import { MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    BloquearUrlComponent,
    HistoricoComponent,
    ConfiguracoesComponent,
    SairComponent,
    MenuComponent,
    AjudaComponent,
    BodyComponent,
    NaoLogadoComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,

  ],
  providers: [autorizadoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
