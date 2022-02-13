import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ClusterRoutingModule } from './cluster-routing.module';
import { ClusterComponent } from './cluster.component';
import { ClusterDetailComponent } from './cluster-detail/cluster-detail.component';
import { ModalClusterUserComponent } from './modal-cluster-user/modal-cluster-user.component';
import { ClusterConfigComponent } from './cluster-config/cluster-config.component';
import { ModalClusterHostComponent } from './modal-cluster-host/modal-cluster-host.component';


@NgModule({
  declarations: [
      ClusterDetailComponent,
      ModalClusterUserComponent,
      ClusterConfigComponent,
      ModalClusterHostComponent,
  ],
  imports: [
      CommonModule,
      SharedModule,
      ClusterRoutingModule,
  ]
})
export class ClusterModule { }
