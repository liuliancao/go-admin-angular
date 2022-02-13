import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceDetailModule } from './service-detail/service-detail.module';
import { ModalServiceUserComponent } from './modal-service-user/modal-service-user.component';
import { ServiceConfigComponent } from './service-config/service-config.component';
import { ModalServiceClusterComponent } from './modal-service-cluster/modal-service-cluster.component';


@NgModule({
    declarations: [
        ServiceDetailComponent,
        ModalServiceUserComponent,
        ServiceConfigComponent,
        ModalServiceClusterComponent,
  ],
  imports: [
      CommonModule,
      SharedModule,
      ServiceRoutingModule,
      ServiceDetailModule
  ]
})
export class ServiceModule { }
