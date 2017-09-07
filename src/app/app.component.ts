import { JediService } from './jedi-service';
import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  description = 'description';
  constructor(service: AppService, jediService: JediService) {
    jediService.getPerson().subscribe( data => {
      console.log(data);
    })
    //service.getData().then( 
    //  data => this.title = data);
  }
}
