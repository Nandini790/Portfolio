import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    ProjectComponent,
    FormsModule 
  ]
})
export class AppModule { }