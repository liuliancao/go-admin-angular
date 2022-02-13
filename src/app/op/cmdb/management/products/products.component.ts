import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/@core/services/product.service';
import { Product } from 'src/app/@shared/models/product';
import { DialogService } from 'ng-devui/modal';
import { ModalProductComponent } from './modal-product/modal-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../management.component.scss']
})
export class ProductsComponent implements OnInit {
    productList: Product[] = [];

    busy: Subscription;
    instance: any;
    constructor(
        private dialogService: DialogService,
        private productService: ProductService
    ) { }

    ngOnInit(): void {
        this.getList()
    }

    private getList() {
        this.busy = this.productService
            .getProducts()
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.productList = data.data.products;
            })
    }
    private createProduct(data) {
        this.busy = this.productService
            .createProduct(data)
            .subscribe((res) => {
                console.log(res);
            })
        location.reload();
    }
    openCreateProductDialog(dialogtype?: string) {
        const results = this.dialogService.open({
            id: 'createProductService',
            maxHeight: '300px',
            title: '新建产品',
            content: ModalProductComponent,
            backdropCloseable: true,
            onClose: () => {
                console.log('closed');
            },
            buttons: [
                {
                    cssClass: 'stress',
                    text: '确认',
                    handler: ($event: Event) => {
                        this.createProduct(results.modalContentInstance.data);
                        results.modalInstance.hide();
                    },
                },
                {
                    id: 'btn-cancel',
                    cssClass: 'common',
                    text: '取消',
                    handler: ($event: Event) => {
                        results.modalInstance.hide();
                    },
                },
            ],
            data: {
                name: '',
                description: '',
            },
        });
    }
}
