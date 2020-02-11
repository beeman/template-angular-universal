import {Component} from '@angular/core';
import {config} from './app.config';

@Component({
  selector: 'app-root',
  template: `
    <ui-layout [config]="config.layout">
      <router-outlet></router-outlet>
    </ui-layout>
  `,
})
export class AppLayoutComponent {
  config = config
}
