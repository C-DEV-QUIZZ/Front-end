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
    client : WebSocket;
    isConnectToWebSocketServer : boolean = false;
    userPseudo: string = '';
    playersList: any = [];
    userGuid : string;
    roomGuid : string;
    mode : any = {};

    constructor(private router: Router, private globals: Globals) {
    }


    
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
     * soit grace au session storage
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
            
            // console.log(NotifServerString);
            // console.log(NotifServerString.data);

            let notif = JSON.parse(NotifServerString.data);

            if (notif.tag == "action"){
                this.setInfoRoomAndPlayer(notif);
            }

            if (notif.tag == "connectionPlayer"){
                this.updatePlayerList(notif);
            }
            if (notif.tag == "message"){
                // console.log(notif.message);
            }
            if(notif.tag == "GameIsReady"){
                this.readyToPlay(notif);
            }

        }
        return;
    }

    /**
     * Connect to web socket servor if i'm not connect
     * @param pseudoPlayer 
     * @returns 
     */
    connectWebSocket(pseudoPlayer : string){
        if(this.isConnectToWebSocketServer)
        {
            console.log("Déja connecté");
            return
        }
        this.isConnectToWebSocketServer = true;
        return this.client = new W3CWebSocket('ws://localhost:3000/'+ pseudoPlayer);
    }

    setInfoRoomAndPlayer(notif :any)
    {
        this.userGuid = notif.objet.clientGuid;
        this.roomGuid = notif.objet.roomGuid;
    }

    updatePlayerList(notif :any)
    {
        this.playersList.length = 0
        let jsonListPlayer = notif.objet;
        jsonListPlayer.forEach(joueur => {
            let isPlayer = false;
            if (joueur.guid == this.userGuid ){
                // si mon joueur
                // alors une bordure orange
                isPlayer= true;
            }
            this.playersList.push({ nom: joueur.pseudo, isPlayer: isPlayer });
        });
    }

    readyToPlay(notif :any)
    {
        document.getElementById("MessageTitre").innerHTML=notif.message;
        var Img=  document.getElementById("imageWait");
        Img.setAttribute("src", "https://espace-stockage.fra1.digitaloceanspaces.com/school/MESI/Gif4-Question.gif");
    
    
    }

    

    // sendNumber(client) {
    //     if (client.readyState === client.OPEN) {
    //         var number = Math.round(Math.random() * 0xFFFFFF);
    //         client.send(number.toString());
    //     }
    // }


}
