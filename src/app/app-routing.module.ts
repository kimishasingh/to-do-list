import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
  { path: 'todo-list', component: ToDoListComponent },
  {
    path: '',
    pathMatch: 'full',
    component: WelcomePageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterTestingModule.withRoutes(routes, { initialNavigation: false }),
  ],
  exports: [RouterTestingModule],
})
export class AppRoutingModule {}
