import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    LeiaMaisHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
