import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Project } from './project/project';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'project', component: Project },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
