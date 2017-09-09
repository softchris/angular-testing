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
  constructor(service: AppService) {
   
  }
}
