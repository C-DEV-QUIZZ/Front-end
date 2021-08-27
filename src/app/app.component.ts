import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AjaxService } from './ajax.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd';

  ngOnInit(): void {}
  public constructor(private titleService: Title , private ajaxService:AjaxService) { 
      titleService.setTitle(environment.NomSite);

      this.ajaxService.getPing().subscribe((Response:any)=>{
          this.AfficheInfoPing(true,Response.message);
        },
        (error)=> 
        {
            if (error.status == 0){
                this.AfficheInfoPing(false,"Le back-end ne réponds pas");
            }
            else if (error.status == 504){
                this.AfficheInfoPing(false,error.error.message)
            }
            else{
                this.AfficheInfoPing(false,"erreur inconnue...");
            }
        }
    );   
  }
  
  AfficheInfoPing(isOk :boolean , message:string){
    if (isOk){
        document.getElementById("spinner").innerHTML =`<li class='fg-white'><span class='mif-verified fg-green'></span>${message}</li>`;
    }
    else{
        document.getElementById("spinner").innerHTML =`<li class='fg-white'><span class='mif-fire fg-red'></span>${message}</li>`;
    }
  }
}
