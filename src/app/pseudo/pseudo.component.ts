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
    mode : any = {};
    numeroPersonnage : number =0
    urlImage= "https://espace-stockage.fra1.digitaloceanspaces.com/school/MESI/Personnage/Personnage{0}.png"
    personnageLink = this.globals.FormatString(this.urlImage,this.numeroPersonnage.toString());
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

        this.ajaxService.postEnvoiMode(data).subscribe(
            (response)=>{
                let jsonResult=  this.globals.ajaxResultToJson(response);
                this.router.navigateByUrl('/'+jsonResult.chemin, { state: { mode:  this.mode.value, pseudo : this.pseudo } });

            },
            (error)=>{
                console.log(error);
            }
        );

    }

    UpdateNumeroPersonnage(nombre)
    {
        this.numeroPersonnage += nombre;
        if(this.numeroPersonnage <0){
            this.numeroPersonnage  = 39;
        }
        if(this.numeroPersonnage>39)
        {
            this.numeroPersonnage  = 0;
        }
        this.personnageLink = this.globals.FormatString(this.urlImage,this.numeroPersonnage.toString());

    }
}
