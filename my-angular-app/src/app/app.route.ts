import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProjectComponent } from './project/project.component';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Services } from './services/services';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'project', component: ProjectComponent },
  { path: 'about', component: About},
  { path: 'services', component: Services },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
