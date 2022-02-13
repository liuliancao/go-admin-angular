import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ModalProductComponent } from './modal-product/modal-product.component';



@NgModule({
    declarations: [
        ModalProductComponent
  ],
  imports: [
      CommonModule,
      SharedModule
  ]
})
export class ProductsModule { }
