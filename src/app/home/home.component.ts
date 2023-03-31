import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() transferRoute : string = '/home';
  Mode(route : string){
    this.transferRoute = route;
  }
}
