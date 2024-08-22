import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  styles: [
    `
      h1 {
        color: green;
      }
    `,
  ],
})
export class AppComponent {
  title = 'second-angular-project';
}
