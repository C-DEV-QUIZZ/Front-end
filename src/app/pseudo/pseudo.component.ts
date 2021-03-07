import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxService } from '../ajax.service';
import { Allmode, Globals } from '../global';

@Component({
    selector: 'app-pseudo',
    templateUrl: './pseudo.component.html',
    styleUrls: ['./pseudo.component.css']
})
export class PseudoComponent implements OnInit {

    pseudo;
    mode= {name :'', value:''};
    Questions ;
    dataEnvoye;
    constructor( private globals: Globals,private router: Router,private ajaxService: AjaxService) { 
    }


    ngOnInit(): void {
        
        // si pas de mode renseigné par la navigation ou par les local storage on renvoi vers l'accueil     
        if(history.state.mode){
            this.mode.name = Allmode[history.state.mode];
            this.mode.value = history.state.mode;            
        }
        else
            this.router.navigate(['/'])
    }

    isValid() {
        if (this.globals.isEmptyOrSpaces(this.pseudo)) {
            this.globals.errorAction("inputPseudo");
            return;
        }

        // appel ajax au serveur on lui envoi le mode :
        let data ={'mode': this.mode.value}; 

        this.dataEnvoye = `mode : ${this.mode.value}`;
        
        this.ajaxService.postEnvoiMode(data).subscribe(
            (response)=>{
                let jsonResult=  this.globals.ajaxResultToJson(response);
                this.Questions = jsonResult;
                console.log(this.Questions);
            },

            (error)=>{

            }
        );

    }
}
