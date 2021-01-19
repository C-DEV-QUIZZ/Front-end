import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../global';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  reponseChoix;
  constructor(private globals: Globals,private router: Router) { }

  ngOnInit(): void {
  }

  reponseChoisit(e){
    var allBtnResult = document.getElementsByClassName("myBtn2");

    Array.from(allBtnResult).forEach((el)=>{
        el.classList.remove("choixReponse");
    });
    this.reponseChoix=e.innerHTML;
    e.classList.add("choixReponse");
    console.log(this.reponseChoix);
  }

  isValid(){
    console.log(this.reponseChoix);
    if (this.globals.if_Undefind_EmptyOrSpaces(this.reponseChoix)) {
      this.globals.errorAction("btnValid");
      return;
    }

  this.router.navigate(['/score']);
  }
}
