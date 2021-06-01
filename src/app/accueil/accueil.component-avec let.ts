import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AjaxService } from '../ajax.service';
import { Allmode } from '../global';
var W3CWebSocket = require('websocket').w3cwebsocket;
let client : WebSocket;

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
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

    connectWebSocket(){
        if(this.isConnectToWebSocketServer)
        {
            console.log("Déja connecté");
            return
        }
        this.isConnectToWebSocketServer = true;
        
        client= new W3CWebSocket('ws://localhost:3000');
        return client;
    }

    sendNumber(client) {
        if (client.readyState === client.OPEN) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            client.send(number.toString());
        }
    }

    navigateToPseudo(modeChoisit){
        if (modeChoisit == Allmode.multi){

            if (this.isConnectToWebSocketServer)
            {
                console.log("Déja connecté");
                return ;
            }
            client = this.connectWebSocket();

            console.log(client.readyState);

            client.onopen = function(){
                console.log("on open");
                console.log(client.readyState);
            };
            return;
        }
            
        //permet d'envoyer le mode (enum dans global) choisit à la page pseudo
        this.router.navigateByUrl('/pseudo', { state: { mode: modeChoisit } });
    }

}
