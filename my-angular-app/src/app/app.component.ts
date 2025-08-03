import { Component } from '@angular/core';
import { Footer } from "src/app/shared/footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [Footer, RouterOutlet ],
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'Nandini Portfolio';

  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    // Initialization logic can go here
  }
}