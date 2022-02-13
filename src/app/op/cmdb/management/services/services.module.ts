import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ModalServiceComponent } from './modal-service/modal-service.component';



@NgModule({
  declarations: [
    ModalServiceComponent
  ],
  imports: [
      CommonModule,
      SharedModule
  ]
})
export class ServicesModule { }
