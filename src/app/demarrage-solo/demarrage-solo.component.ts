import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxService } from '../ajax.service';
import { Allmode, Globals } from '../global';

@Component({
    selector: 'app-demarrage-solo',
    templateUrl: './demarrage-solo.component.html',
    styleUrls: ['./demarrage-solo.component.css']
})
export class DemarrageSoloComponent implements OnInit {

    mode :any ={};
    Questions : any = [];
    constructor(private ajaxService: AjaxService, private globals: Globals, private router: Router) { }

    ngOnInit(): void {

        if (history.state.mode) {
            this.mode.name = Allmode[history.state.mode];
            this.mode.value = history.state.mode;
        }
        else
            this.router.navigate(['/'])

        let data = { 'mode': this.mode.value };
        this.ajaxService.postConnexionModeSolo(data).subscribe(

            (response) => {
                let jsonResult = this.globals.ajaxResultToJson(response);
                this.Questions = jsonResult;
                console.log(this.Questions);
            },
            (error) => {
                console.log(error);
            }

        );
    }

}
