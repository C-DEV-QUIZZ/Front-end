import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PseudoComponent } from './pseudo/pseudo.component';
import { FormsModule } from '@angular/forms';
import { Globals } from './global';
import { QuestionComponent } from './question/question.component';
import { ScoresComponent } from './scores/scores.component';
import { HttpClientModule } from '@angular/common/http';
import { DemarrageSoloComponent } from './demarrage-solo/demarrage-solo.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PseudoComponent,
    QuestionComponent,
    ScoresComponent,
    DemarrageSoloComponent
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
