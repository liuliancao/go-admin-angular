import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../@shared/shared.module';

import { ConfigRoutingModule } from './config-routing.module';
import { HomeComponent } from './home/home.component';
import { ModalConfigComponent } from './home/modal-config/modal-config.component';


@NgModule({
  declarations: [
      HomeComponent,
      ModalConfigComponent
  ],
  imports: [
      CommonModule,
      SharedModule,
    ConfigRoutingModule
  ]
})
export class ConfigModule { }
