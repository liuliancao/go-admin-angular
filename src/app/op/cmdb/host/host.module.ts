import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostRoutingModule } from './host-routing.module';
import { ModalHostComponent } from './modal-host/modal-host.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HostRoutingModule
  ]
})
export class HostModule { }
