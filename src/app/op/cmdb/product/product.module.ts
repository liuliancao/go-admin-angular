import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ModalProductUserComponent } from './modal-product-user/modal-product-user.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ModalProductUserComponent,
  ],
  imports: [
      CommonModule,
      ProductRoutingModule,
      SharedModule,
  ]
})
export class ProductModule { }
