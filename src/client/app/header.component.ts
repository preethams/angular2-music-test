import {Component} from 'angular2/core';

@Component({
  selector: '<app-header></app-header',
  template: `
    <nav class="navbar navbar-custom">
        <h2 class="text-center text-custom">Play your song...</h2>        
    </nav>
  `,
  styles: [`
    .navbar-custom {
      background-color: rgba(30, 18, 78, 0.83);
    }
    .text-custom {
      color: white;
    }
  `]
})

export class HeaderComponent {    
}