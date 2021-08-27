import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-score-solo',
    templateUrl: './score-solo.component.html',
    styleUrls: ['./score-solo.component.css']
})
export class ScoreSoloComponent implements OnInit {

    pseudo : string ;
    points : string ;
    QuestionReponseList ;
    reponsePlayer;
    pointMax;
    constructor(private router :Router) {
        if(history.state.points){
            this.points = history.state.points;
            this.pseudo = history.state.pseudo;
            this.QuestionReponseList = history.state.bonneReponseList;            
            this.reponsePlayer = history.state.reponsePlayer;
            this.pointMax = history.state.poitnMax;
        }
        else
            this.router.navigate(['/'])
    }

    ngOnInit(): void {
    }

    GetPlayerReponseFromQuestion(Question){
        var reponseEnvoye = this.reponsePlayer.find(x=> x.questionId == Question.id);
        var reponsePlayer= Question.reponses.find(x=> x.id == reponseEnvoye.reponseUtilisateurId);
        var texte =  reponsePlayer.texte;
        return texte;
    }
}
