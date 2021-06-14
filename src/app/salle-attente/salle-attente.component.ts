import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debug } from 'console';
import { Allmode, Globals } from '../global';
var W3CWebSocket = require('websocket').w3cwebsocket;

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
    userPseudo: string = '';
    playersList: any = [];
    userGuid : string;
    roomGuid : string;

    mode : any = {};
    
    ngOnInit(): void {
        this.recupUserName();
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
        // this.playersList.push({ nom: this.userPseudo, statut: true });
    }


    startConnection(){
        if(this.isConnectToWebSocketServer)
        {
            console.log("Déja connecté");
            return
        }
        this.client = this.connectWebSocket(this.userPseudo);
        this.client.onopen = ()=>{
            console.log("on open");
        };

        this.client.onmessage = (NotifServerString) =>{
            
            console.log(NotifServerString);
            console.log(NotifServerString.data);

            let notif = JSON.parse(NotifServerString.data);

            if (notif.tag == "action"){
                console.log(notif.message);
                this.userGuid = JSON.parse(JSON.stringify(notif.objet)).clientGuid;
                this.roomGuid = JSON.parse(JSON.stringify(notif.objet)).roomGuid;
            }

            if (notif.tag == "connectionPlayer"){
                console.log(notif.message);
                this.playersList.length = 0
                let jsonListPlayer = JSON.parse(JSON.stringify(notif.objet));
                jsonListPlayer.forEach(joueur => {
                    let isPlayer = false;
                    if (joueur.guid == this.userGuid ){
                        isPlayer= true;
                    }
                    this.playersList.push({ nom: joueur.pseudo, isPlayer: isPlayer });
                });

            }
            if (notif.tag == "message"){
                console.log(notif.message);
            }

        }
        return;
    }

    connectWebSocket(pseudoPlayer : string){
        if(this.isConnectToWebSocketServer)
        {
            console.log("Déja connecté");
            return
        }
        this.isConnectToWebSocketServer = true;
        return this.client = new W3CWebSocket('ws://localhost:3000/'+ pseudoPlayer);
    }

    sendNumber(client) {
        if (client.readyState === client.OPEN) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            client.send(number.toString());
        }
    }


}
