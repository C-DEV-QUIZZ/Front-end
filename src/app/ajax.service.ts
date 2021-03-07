import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class AjaxService{

    private adresse= environment.adresse;

    private http:HttpClient;
    
    constructor(http:HttpClient){
        this.http=http;
    }

    private urlModeController = this.adresse+"/controller/receptionModeController.php/"

    postEnvoiMode(data){
        return this.http.post(this.urlModeController,data);
    }

}