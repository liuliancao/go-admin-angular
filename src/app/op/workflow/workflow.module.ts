import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/@shared/shared.module';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkflowComponent } from './workflow.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';


@NgModule({
    declarations: [
        WorkflowComponent,
        HomeComponent,
        CreateComponent
  ],
  imports: [
      CommonModule,
      WorkflowRoutingModule,
      SharedModule
  ]
})
export class WorkflowModule { }
