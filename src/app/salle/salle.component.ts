import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Globals } from '../global';
@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {


  constructor(private router: Router,private globals: Globals) {
    this.router.events
    .pipe(filter(e => e instanceof NavigationStart))
    .subscribe((e: NavigationStart) => {
      const navigation  = this.router.getCurrentNavigation();
      this.use = navigation.extras.state ? navigation.extras.state.pseudo : 0;

    });

  }
  ngOnInit(): void {
    console.log(sessionStorage.getItem("pseudo"));
    if(history.state.pseudo){
      this.use=history.state.pseudo;
      sessionStorage.setItem("pseudo",this.use);
    }
    else if(sessionStorage.getItem("pseudo")){
        this.use = sessionStorage.getItem("pseudo");
    }
    else{
      let prenom = this.globals.getRandomPrenom();
      this.use= prenom;
      sessionStorage.setItem("pseudo",this.use);
    }
  }
  use :string = "";
  utilisateur :any= []
  // ngOnInit(): void {
  //   console.log(this.use);
  //   this.utilisateur.push(
  //     {nom:"bill",statut:true}
  //     )
  //   this.utilisateur.push(
  //     {nom:"roger",statut:false}
  //     )
  //   this.utilisateur.push(
  //     {nom:"Lea",statut:true}
  //     )
  //   this.utilisateur.push(
  //     {nom:"Marco",statut:false}
  //     )
  // }

}
