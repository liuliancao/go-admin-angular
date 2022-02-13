import { Component, Input, OnInit } from '@angular/core';
import { ModalComponent } from 'ng-devui/modal';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss']
})
export class ModalProductComponent implements OnInit {
    @Input() data: any;
    ngOnInit(): void {
    }

    constructor() {
    }
}
