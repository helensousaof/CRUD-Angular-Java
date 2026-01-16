import { provideRouter, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses/courses.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Courses' },
  { path: 'courses', component: CoursesComponent },
];

export const appRouterProviders = [provideRouter(routes)];
