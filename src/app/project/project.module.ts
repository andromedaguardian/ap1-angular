import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DocumentationComponent } from "./documentation.component";
import { ProjectRoutingModule } from "./project.routing.module";
import { ProjectDashboardComponent } from "./projectdashboard.component";
import { StakeHolderComponent } from "./stakeholder.component";

@NgModule({
  declarations: [StakeHolderComponent, DocumentationComponent, ProjectDashboardComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})

export class ProjectModule {}
