import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../global';

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

    use: string = '';
    players: any = [];

    ngOnInit(): void {
        this.RecupUserName();
    }
    /**
     * Recupere l'user soit grace à la page pseudo
     * soit grace au session storage (si F5)
     * soit attribue un fake name.
     */
    RecupUserName() {
        if (history.state.pseudo) {
            this.use = history.state.pseudo;
            sessionStorage.setItem('pseudo', this.use);
        } else if (sessionStorage.getItem('pseudo')) {
            this.use = sessionStorage.getItem('pseudo');
        } else {
            let prenom = this.globals.getRandomPrenom();
            this.use = prenom;
            sessionStorage.setItem('pseudo', this.use);
        }
        this.players.push({ nom: this.use, statut: true });
    }

    /**
     * Methode de test pour ajout dynamic utilisateur
     */
    public addUser() {
        let actif = (Math.floor(Math.random() * 2) + 1) % 2 == 0 ? true : false;
        this.players.push({ nom: this.globals.getRandomPrenom(), statut: actif });
    }
}
