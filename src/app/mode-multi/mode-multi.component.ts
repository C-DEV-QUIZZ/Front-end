import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questions, ReponseJoueur, Reponses } from 'src/Models/Models';
import { Allmode, Globals } from '../global';

@Component({
    selector: 'app-mode-multi',
    templateUrl: './mode-multi.component.html',
    styleUrls: ['./mode-multi.component.css']
})
export class ModeMultiComponent implements OnInit {

    constructor(private router: Router, public globals: Globals) { }
    mode : any = {};
    userPseudo;
    minutor:number=0;
    question : Questions;
    TimerInterval;
    listReponseJoueur : ReponseJoueur[] =[];

    ngOnInit(): void {
        this.recupUserName();
        if(history.state.mode){
            // check si bien en mode multi
            this.mode.name = Allmode[history.state.mode];
            this.mode.value = history.state.mode; 
            console.log(this.mode.value)
            console.log(this.userPseudo)          
            if (this.mode.value != Allmode.multi){
                this.router.navigate(['/']) ;
                return;
            }
            this.StartListenWebSocket();
        }
        else
            this.router.navigate(['/'])
    }

    recupUserName() {
        if (history.state.pseudo) {
            this.userPseudo = history.state.pseudo;
            sessionStorage.setItem('pseudo', this.userPseudo);
        } else if (sessionStorage.getItem('pseudo')) {
            this.userPseudo = sessionStorage.getItem('pseudo');
        } else {
            let prenom = this.globals.getRandomPrenom();
            this.userPseudo = prenom;
            sessionStorage.setItem('pseudo', this.userPseudo);
        }
    }

    StartListenWebSocket() {
        this.globals.client.onmessage = (NotifServerString) =>{
            // console.log(NotifServerString);
            // console.log(NotifServerString.data);
            let notif = JSON.parse(NotifServerString.data);
            if(notif.tag == "ReceivedQuestion"){
                this.printQuestion(notif);
            }
        }
    }

    printQuestion(notif: any) {
        clearInterval(this.TimerInterval);
        this.minutor = Number(notif.message);
        let button = document.getElementById("minuteurMulti");
        button.innerHTML = this.minutor.toString();
        button.removeAttribute("hidden"); 
        this.TimerInterval = setInterval(()=>{
            this.minutor--;
            document.getElementById("minuteurMulti").innerHTML = this.minutor.toString();            
            if(this.minutor <=0)
            {
                clearInterval(this.TimerInterval);
                // console.table(this.listReponseJoueur);
                return;
            }
        },1000);
        this.question = notif.objet;
    }

        // lorsque l'on clique sur une réponse :
    saveReponse(question_Id, reponseId,button) {
        this.listReponseJoueur = this.listReponseJoueur.filter(reponse=> reponse.questionId != question_Id);
        this.listReponseJoueur.push({questionId : question_Id, reponseUtilisateurId: reponseId });
        var elements = document.getElementsByClassName("btnReponse");
        for(var i = elements.length - 1; i >= 0; --i)
        {
            let element= elements[i] as HTMLElement;
            element.style.border = 'none';
            element.style.border = '1px solid rgb(146, 148, 248);';
        }
        button.style.border = '3px solid lightgreen';
    }
    
}
