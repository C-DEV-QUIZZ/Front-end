import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PseudoComponent } from './pseudo/pseudo.component';
import { FormsModule } from '@angular/forms';
import { Globals } from './global';
import { ScoresComponent } from './scores/scores.component';
import { HttpClientModule } from '@angular/common/http';
import { SalleAttenteComponent } from './salle-attente/salle-attente.component';
import { ScoreSoloComponent } from './score-solo/score-solo.component';
import { ModeSoloComponent } from './mode-solo/mode-solo.component';
import { ModeMultiComponent } from './mode-multi/mode-multi.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PseudoComponent,
    ScoresComponent,
    SalleAttenteComponent,
    ScoreSoloComponent,
    ModeSoloComponent,
    ModeMultiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
