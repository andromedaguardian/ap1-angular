import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DocumentationComponent } from "./documentation.component";
import { StakeHolderComponent } from "./stakeholder.component";
import { ProjectDashboardComponent } from "./projectdashboard.component";

const routes: Routes = [
  { path: 'dashboard', component: ProjectDashboardComponent,
    children: [
      { path: 'stackeholder', component: StakeHolderComponent},
      { path: 'documentation', component: DocumentationComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule { }
