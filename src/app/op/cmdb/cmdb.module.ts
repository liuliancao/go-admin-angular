import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../@shared/shared.module';
import {
    PaginationModule,
    TooltipModule,
} from 'ng-devui';
import { CmdbRoutingModule } from './cmdb-routing.module';
import { CmdbComponent } from './cmdb.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { HostComponent } from './host/host.component';
import { HostService } from 'src/app/@core/services/host.service';
import { ManagementComponent } from './management/management.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { ClusterComponent } from './cluster/cluster.component';
import { ModalHostComponent }  from './host/modal-host/modal-host.component';

@NgModule({
    declarations: [
        CmdbComponent,
        HostComponent,
        ManagementComponent,
        ProductComponent,
        ServiceComponent,
        ClusterComponent,
        ModalHostComponent,
  ],
  imports: [
      CommonModule,
      SharedModule,
      PaginationModule,
      TooltipModule,
      CmdbRoutingModule,
  ],
    providers:[ HostService ]
})
export class CmdbModule { }
