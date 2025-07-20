import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class ProjectComponent {

  public projects = [
      {
        title: 'Portfolio Website',
        description: 'A personal website built using Angular.'
      },
      {
        title: 'E-commerce Platform',
        description: 'A simple shopping platform with cart functionality.'
      },
      {
        title: 'Task Tracker',
        description: 'An app to manage daily tasks and productivity.'
      }
    ];

    constructor() {
    console.log('Projects Loaded:', this.projects);
  }
}
