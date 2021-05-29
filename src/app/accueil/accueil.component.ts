import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Allmode } from '../global';
import { io } from "socket.io-client";

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
    constructor(private router: Router) {
        
    }

    colorBackground;

    Allmode = Allmode;
    socket;
    ngOnInit(): void {
        this.colorBackground = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--background-color');

    }

    navigateToPseudo(modeChoisit){
        if (modeChoisit == Allmode.multi)
        {
            this.socket = io('http://localhost:3000',{path:"/test"});
            return;
        }

        //permet d'envoyer le mode (enum dans global) choisit à la page pseudo
        this.router.navigateByUrl('/pseudo', { state: { mode: modeChoisit } });
    }


}
