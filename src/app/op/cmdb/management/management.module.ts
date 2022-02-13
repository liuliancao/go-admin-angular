import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../@shared/shared.module';
import { FormModule } from 'ng-devui/form';

import { ManagementRoutingModule } from './management-routing.module';
import { ProductsModule } from './products/products.module';
import { ServicesModule } from './services/services.module';
import { ClustersModule } from './clusters/clusters.module';
import { ResourcesModule } from './resources/resources.module';
import { UsersModule } from './users/users.module';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ClustersComponent } from './clusters/clusters.component';
import { UsersComponent } from './users/users.component';
import { ModalClusterComponent } from './clusters/modal-cluster/modal-cluster.component';
import { ModalUserComponent } from './users/modal-user/modal-user.component';
import { ModalDepartmentComponent } from './users/modal-department/modal-department.component';


@NgModule({
  declarations: [
    ProductsComponent,
    HomeComponent,
    ServicesComponent,
    ClustersComponent,
    UsersComponent,
    ModalClusterComponent,
      ModalUserComponent,
      ModalDepartmentComponent
  ],
  imports: [
      CommonModule,
      SharedModule,
      FormModule,
      ManagementRoutingModule,
      ProductsModule,
      ServicesModule,
      UsersModule,
      ClustersModule,
      ResourcesModule,
  ]
})
export class ManagementModule { }
