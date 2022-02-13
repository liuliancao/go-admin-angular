import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../@shared/shared.module';
import { DialogService, BackTopModule } from 'ng-devui';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
    declarations: [ DashboardComponent ],
    imports: [
        CommonModule,
        SharedModule,
        DashboardRoutingModule
    ],
    providers: [DialogService]
})
export class DashboardModule { }
