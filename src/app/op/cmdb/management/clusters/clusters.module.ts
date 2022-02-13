import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ModalClusterComponent } from './modal-cluster/modal-cluster.component';



@NgModule({
    declarations: [
  ],
  imports: [
      CommonModule,
      SharedModule
  ]
})
export class ClustersModule { }
