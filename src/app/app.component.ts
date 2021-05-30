import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd';

  ngOnInit(): void {}
  public constructor(private titleService: Title) { 
      titleService.setTitle(environment.NomSite);
  }
    
}
