import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Allmode, Globals } from '../global';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  mode : any = {};
  userPseudo;
  haveAllScore =false;
  constructor(private router: Router, public globals: Globals) { }

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

        if(notif.tag == "123"){
        }
    }
}

}
