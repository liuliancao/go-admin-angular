import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../@shared/shared.module';

import { DeployRoutingModule } from './deploy-routing.module';
import { DeployComponent } from './deploy.component';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';
import { ServiceComponent } from './service/service.component';


@NgModule({
    declarations: [
        DeployComponent,
        HomeComponent,
        ManagementComponent,
        ServiceComponent,
  ],
  imports: [
      CommonModule,
      SharedModule,
      DeployRoutingModule,
  ]
})
export class DeployModule { }
