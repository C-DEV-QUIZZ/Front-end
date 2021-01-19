import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../global';

@Component({
    selector: 'app-pseudo',
    templateUrl: './pseudo.component.html',
    styleUrls: ['./pseudo.component.css']
})
export class PseudoComponent implements OnInit {

    pseudo;
    constructor(private globals: Globals,private router: Router) { }

    ngOnInit(): void {
    }

    isValid() {
        if (this.globals.isEmptyOrSpaces(this.pseudo)) {
            this.globals.errorAction("inputPseudo");
        }

        this.router.navigate(['/question']);

    }
}
