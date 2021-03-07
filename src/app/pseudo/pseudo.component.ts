import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Allmode, Globals } from '../global';

@Component({
    selector: 'app-pseudo',
    templateUrl: './pseudo.component.html',
    styleUrls: ['./pseudo.component.css']
})
export class PseudoComponent implements OnInit {

    pseudo;
    mode;

    constructor(private globals: Globals,private router: Router) { 
    }


    ngOnInit(): void {
        
        // si pas de mode renseigné par la navigation ou par les local storage on renvoi vers l'accueil     
        if(history.state.mode)
            this.mode = Allmode[history.state.mode];
        else
            this.router.navigate(['/'])
    }

    isValid() {
        if (this.globals.isEmptyOrSpaces(this.pseudo)) {
            this.globals.errorAction("inputPseudo");
            return;
        }

        // selon le mode on envoi vers la salle d'attente
        this.router.navigate(['/question']); // route actuel pour le mode multi


        // ou vers les questions off-line


    }
}
