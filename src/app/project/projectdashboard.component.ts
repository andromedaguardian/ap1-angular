import { Component } from '@angular/core';

@Component({
  template: `<h1>Project Dashboard Component</h1>

  <ul>
    <li><a routerLink="stackeholder">Stakeholder</a></li>
    <li> <a routerLink="documentation">Documentation</a></li>
  </ul>
  <router-outlet></router-outlet>
  `,
})
export class ProjectDashboardComponent {
  title = '';
}
