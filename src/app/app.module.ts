import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpHeaders } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MenuPrecosComponent } from './menu-precos/menu-precos.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CopyrightComponent } from './layout/copyright/copyright.component';
import { LeiaMaisHomeComponent } from './leia-mais/leia-mais-home/leia-mais-home.component';

import { ContatoService } from './contato/contato.service';
import { MensagemEnviadaComponent } from './mensagem-enviada/mensagem-enviada.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { MensagemErroComponent } from './mensagem-erro/mensagem-erro.component';
import { NovidadesComponent } from './novidades/novidades.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    GaleriaComponent,
    MenuPrecosComponent,
    SobreComponent,
    ContatoComponent,
    FooterComponent,
    CopyrightComponent,
    LeiaMaisHomeComponent,
    MensagemEnviadaComponent,
    CampoControlErroComponent,
    MensagemErroComponent,
    NovidadesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
