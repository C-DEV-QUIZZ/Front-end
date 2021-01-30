import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PseudoComponent } from './pseudo/pseudo.component';
import { QuestionComponent } from './question/question.component';
import { SalleComponent } from './salle/salle.component';
import { ScoresComponent } from './scores/scores.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'pseudo', component: PseudoComponent },
  { path: 'salle', component: SalleComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'score', component: ScoresComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
