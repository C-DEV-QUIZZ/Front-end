import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-score-solo',
    templateUrl: './score-solo.component.html',
    styleUrls: ['./score-solo.component.css']
})
export class ScoreSoloComponent implements OnInit {

    pseudo : string = "";
    points : string = "";
    constructor(private router :Router) {
        if(history.state.points){
            this.points = history.state.points;
            this.pseudo = history.state.pseudo;
        }
        else
            this.router.navigate(['/'])
    }

    ngOnInit(): void {
    }

}
