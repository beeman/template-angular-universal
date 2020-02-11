import { Routes } from '@angular/router'
import { AppLayoutComponent } from './app-layout.component'
import { AppHomeComponent } from './app-home.component'
import { App404Component } from './app-404.component'

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'home', component: AppHomeComponent },
      { path: '**', component: App404Component },
    ],
  },
]
