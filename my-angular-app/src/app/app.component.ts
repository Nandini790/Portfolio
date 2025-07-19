import { Component } from '@angular/core';
import { Navbar } from "src/shared/navbar/navbar";
import { Footer } from "src/shared/footer/footer";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [Navbar, Footer, RouterOutlet],
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';

  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    // Initialization logic can go here
  }
}