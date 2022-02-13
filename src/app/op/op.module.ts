import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpRoutingModule } from './op-routing.module';
import { OpComponent } from './op.component';
import { DialogService, BackTopModule } from 'ng-devui';
import { SharedModule } from '../@shared/shared.module';
import { DaLayoutModule } from '../@shared/layouts/da-layout';
import { ConfigComponent } from './config/config.component';


@NgModule({
    declarations: [
        OpComponent,
        ConfigComponent,
  ],
  imports: [
      CommonModule,
      SharedModule,
      BackTopModule,
      DaLayoutModule,
      OpRoutingModule,
  ],
    providers: [DialogService]
})
export class OpModule { }
