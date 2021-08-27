import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class AjaxService{

    private adresse= environment.adresseBackEnd;

    private http:HttpClient;
    
    constructor(http:HttpClient){
        this.http=http;
    }

    private urlModeController = this.adresse+"controller/receptionMode";
    private urlConnexionModeSoloController = this.adresse+"controller/modeSolo/start";
    private urlCalculResultController = this.adresse+"controller/modeSolo/calculResult";
    private urlPingBack = this.adresse+"ping";

    postEnvoiMode(data){
        return this.http.post(this.urlModeController,data);
    }
    postConnexionModeSolo(data){
        return this.http.post(this.urlConnexionModeSoloController,data);
    }
    postCalculResultatSolo(data){
        return this.http.post(this.urlCalculResultController,data);
    }

    getPing(){
        return this.http.get(this.urlPingBack);
    }

}