export class ReponseJoueur{
    public questionId : number;
    public reponseUtilisateurId : number;
}

export interface Questions
{
    id : number;
    texte : string;
    points : number;
    reponses : Reponses[];
    difficultes : Difficultes;
}

export interface BonneReponse{
    id : number;
    texte : string;
}

export interface Reponses{
    id : number;
    texte : string;
}

export interface Difficultes{
    id : number;
    nom : string;
}
export interface Message{
     tag : String;
     message :String;
     objet : any;
}