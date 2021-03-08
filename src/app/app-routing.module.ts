import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DemarrageSoloComponent } from './demarrage-solo/demarrage-solo.component';
import { PseudoComponent } from './pseudo/pseudo.component';
import { QuestionComponent } from './question/question.component';
import { ScoresComponent } from './scores/scores.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'pseudo', component: PseudoComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'score', component: ScoresComponent },
  { path: 'demarrage-solo', component: DemarrageSoloComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
