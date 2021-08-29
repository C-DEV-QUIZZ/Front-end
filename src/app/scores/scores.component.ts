import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Allmode, Globals } from '../global';
import { ResultScore } from '../Models/Models';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  mode : any = {};
  userPseudo;
  haveAllScore =false;
  resultScoreList : ResultScore[] = [];
  constructor(private router: Router, public globals: Globals) {

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

  ngOnInit(): void {
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
        let notif = JSON.parse(NotifServerString.data);

        if(notif.tag == "receivedScore"){
            let tmp = JSON.parse(notif.objet);
            this.resultScoreList = tmp.sort((a, b) => (a.score > b.score ? -1 : 1));
            console.table(this.resultScoreList);

            this.haveAllScore = true;
        }
    }
}

}
