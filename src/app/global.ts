import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
declare let toastr : any;

@Injectable()
export class Globals {

    constructor(private router: Router){}

    public static COOKIE_NAME:string = "Zz3Qu177";
    public static COMPTE_STRING:string = "compte";
    public static CONNEXION_STRING:string = "connexion";




    // todo si reviens sur le site 
    //Compte: string = Cookie.get(COOKIE_NAME) ? `Gestion de compte`:"Compte";


    public validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    public isEmptyOrSpaces(str){
        if(str===undefined)
            return true;
        return str === null || str.match(/^ *$/) !== null || str.trim()== "" || str.trim().length==0;
    }

    public ifStringRespectcaracterNb(str,min,max)
    {
        if (str.length < min || str.length > max){
            return false;
        }
        return true;
    }


    // prend l'id d'une balise paragraphe : exemple =>  "inputMessageModalExemple"
    // Ne pas oublier les guillements !
    public PrintMessage(element,message,error=true,time=3000)
    {
        document.getElementById(element).style.color="Green";
        document.getElementById(element).innerHTML=message;
        if(error)
            document.getElementById(element).style.color="Red";
        setTimeout(function(){
            document.getElementById(element).innerHTML="";
        },time);

    }
    // secoue et affiche en rouge en cas d'erreur
    public errorAction(element,time=1500)
    {
        document.getElementById(element).style.borderColor="red";
        document.getElementById(element).classList.add("ani-horizontal");
        setTimeout(function(){
            document.getElementById(element).style.borderColor="#F7F9F9";
            document.getElementById(element).classList.remove("ani-horizontal");
        },time);
    }


    public if_Undefind_EmptyOrSpaces(str){
        if(str==undefined)
            return true;
        return str === null || str.match(/^ *$/) !== null;
    }
}