import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, Injector, NgModule } from '@angular/core';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, ToDoListComponent, WelcomePageComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, CommonModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ErrorHandler],
})
export class AppModule {
  constructor(private injector: Injector, private router: Router) {}

  ngDoBootstrap(): void {
    const appComponent = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('my-todo-list-app', appComponent);
    this.router.initialNavigation();
  }
}
