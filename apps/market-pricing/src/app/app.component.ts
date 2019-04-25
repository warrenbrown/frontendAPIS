import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'market-pricing!';

  links = [
    { path: '/', title: 'Home', icon: 'home'},
    { path: '/stadiums', title: 'Stadiums', icon: 'work'},
    { path: '/cards', title: 'Cards', icon: 'person_outline'}
  ]
}
