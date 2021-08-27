import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ModeMultiComponent } from './mode-multi/mode-multi.component';
import { ModeSoloComponent } from './mode-solo/mode-solo.component';
import { PseudoComponent } from './pseudo/pseudo.component';
import { SalleAttenteComponent } from './salle-attente/salle-attente.component';
import { ScoreSoloComponent } from './score-solo/score-solo.component';
import { ScoresComponent } from './scores/scores.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'pseudo', component: PseudoComponent },
  { path: 'salle-attente', component: SalleAttenteComponent },
  { path: 'score', component: ScoresComponent },
  { path: 'score-solo', component: ScoreSoloComponent },
  { path: 'mode-solo', component: ModeSoloComponent },
  { path: 'mode-multi', component: ModeMultiComponent },
  { path: '**', component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
