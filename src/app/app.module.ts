import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UiModule} from '@kikstart/ui';
import {RouterModule} from '@angular/router';

import { routes } from './app.routes';

import { AppComponent } from './app.component'
import { AppLayoutComponent } from './app-layout.component'
import { App404Component } from './app-404.component'
import { AppHomeComponent } from './app-home.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    UiModule,
  ],
  declarations: [
    AppComponent,
    AppLayoutComponent,
    App404Component,
    AppHomeComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
