import { Component, ViewEncapsulation } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root', // exposed in an element selector 
  templateUrl: './app.component.html', // html - template is mandatory -- should be only one
  styleUrls: ['./app.component.scss'] // css -- Optional -- can be multiple
})
export class AppComponent {
  // ts
  title = 'user-mgmt-soti2021';
}
