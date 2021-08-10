import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AjaxService } from '../ajax.service';
import { Allmode } from '../global';
var W3CWebSocket = require('websocket').w3cwebsocket;
let client;
@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
    client : WebSocket;
    isConnectToWebSocketServer : boolean = false;
    constructor(private router: Router, private ajaxService:AjaxService) {
        
    }
    version :string= environment.appVersion;
    typeEnvironnement :string= environment.typeEnvironnement;
    AdresseBackEnd :string= environment.adresseBackEnd;
    AdresseLocal :string= environment.adresseFrontEnd;

    colorBackground;

    Allmode = Allmode;
    socket;

    ngOnInit(): void {
        this.colorBackground = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--background-color');

    }

    navigateToPseudo(modeChoisit){
        //permet d'envoyer le mode (enum dans global) choisit à la page pseudo
        this.router.navigateByUrl('/pseudo', { state: { mode: modeChoisit } });
    }

}
