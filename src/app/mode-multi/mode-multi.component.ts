import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    ngOnInit(): void {
        this.recupUserName();
        debugger
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


    printQuestion(notif: any) {
        console.log(notif.message);
        console.log(notif.objet);
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
}
