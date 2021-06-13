import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Allmode, Globals } from '../global';
var W3CWebSocket = require('websocket').w3cwebsocket;
let client;

@Component({
    selector: 'app-salle-attente',
    templateUrl: './salle-attente.component.html',
    styleUrls: ['./salle-attente.component.css'],
})
export class SalleAttenteComponent implements OnInit {
    constructor(private router: Router, private globals: Globals) {
        /* == ALGORTHIME FRONT END DE LA SALLE D ATTENTE == */
        // A l'arrivée sur cette route une requete ajax interroge le server.
        // Le serveur attribue et renvoi un lobby à l'utilisateur (lobby à un id unique).
        // Le serveur renvoi alors le nom des joueurs déja dans la salle d'attente du lobby.
        // Le serveur renvoi le temps qu'il reste avant le début de session.
        // A la réponse du serveur on incremente la liste des players (this.utilisateurs).
        // On déclence le timeur qui affiche au client le temps restant avant le début de session
        /* Passage a revoir :*/
        // Chaque X seconde(s) on interroge le serveur pour obtenir les players co/déco.
        // Une fois le timeur finit (drapeau coté serveur) =>
        // le serveur transmets une clé unique qui permet au client de passé à l'écran des questions
        // le serveur renvoi en meme temps la premiere question.
    }

    client : WebSocket;
    isConnectToWebSocketServer : boolean = false;
    socket;

    userPseudo: string = '';
    players: any = [];
    mode : any = {};
    room : any;
    ngOnInit(): void {

        // si pas de mode renseigné par la navigation ou par les local storage on renvoi vers l'accueil     
        if(history.state.mode){

            // check si bien en mode multi
            this.mode.name = Allmode[history.state.mode];
            this.mode.value = history.state.mode;           
            if (this.mode.value != Allmode.multi){
                this.router.navigate(['/']) ;
                return;
            }
            this.startConnection();
        }
        else
            this.router.navigate(['/'])



        this.recupUserName();
    }





    /**
     * Recupere le pseudo de l'user soit grace à la page pseudo
     * soit grace au session storage (si F5)
     * soit attribue un fake name.
     */
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
        this.players.push({ nom: this.userPseudo, statut: true });
    }


    startConnection(){
        if(this.isConnectToWebSocketServer)
        {
            console.log("Déja connecté");
            return
        }
        this.client = this.connectWebSocket();
        this.client.onopen = function(){
            console.log("on open");
        };
        console.log(this.client.readyState);
        return;
    }

    connectWebSocket(){
        if(this.isConnectToWebSocketServer)
        {
            console.log("Déja connecté");
            return
        }
        this.isConnectToWebSocketServer = true;
        return this.client = new W3CWebSocket('ws://localhost:3000');
    }

    sendNumber(client) {
        if (client.readyState === client.OPEN) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            client.send(number.toString());
        }
    }


}
