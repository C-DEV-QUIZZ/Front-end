import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxService } from '../ajax.service';
import { Allmode, Globals } from '../global';

@Component({
    selector: 'app-mode-solo',
    templateUrl: './mode-solo.component.html',
    styleUrls: ['./mode-solo.component.css']
})
export class ModeSoloComponent implements OnInit {

    mode: any = {};
    listQuestions = [];
    listReponse = [];
    messageInfo = "Toutes actualisations de cette page entraine la perte de la progression !";
    pseudo;

    constructor(private ajaxService: AjaxService, private globals: Globals, private router: Router) {

        if (history.state.mode) {
            this.mode.name = Allmode[history.state.mode];
            this.mode.value = history.state.mode;
            this.pseudo = history.state.pseudo;
        }
        else
            this.router.navigate(['/'])

        let data = { 'mode': this.mode.value };
        this.ajaxService.postConnexionModeSolo(data).subscribe(

            (response) => {
                let jsonResult = this.globals.ajaxResultToJson(response);
                this.listQuestions = jsonResult;
                console.log(this.listQuestions);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    ngOnInit(): void { }


    // lorsque l'on clique sur une réponse :
    saveReponse(questionId, reponseId) {
        console.log(questionId);
        console.log(reponseId);


        this.listQuestions.shift();
        this.listReponse.push({ questionId: questionId, reponseUtilisateurId: reponseId });
        if (this.listQuestions.length == 0) {
            this.messageInfo = "no more question";
            console.log("fini : ")
            console.log(this.listReponse)

            this.envoiReponse();
        }
    }

    envoiReponse() {

        this.ajaxService.postCalculResultatSolo(this.listReponse).subscribe(
            (Response) => {
                console.log(Response);
                // get nombre de point 
                let jsonResult = this.globals.ajaxResultToJson(Response);
                let nbPointsJoueur = jsonResult.points;

                // des qu'il aura le nombre point du joueurs on bifurques vers la page résultat avec le nombre de point :
                this.router.navigateByUrl('/score-solo', { state: { points: nbPointsJoueur, pseudo: this.pseudo } });
            },
            (error) => {
                console.log(error);
            }
        );
    }

}
