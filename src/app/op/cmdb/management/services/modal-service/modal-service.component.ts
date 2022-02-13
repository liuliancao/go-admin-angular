import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/@core/services/product.service';
import { AppService } from 'src/app/@core/services/app.service';

@Component({
  selector: 'app-modal-service',
  templateUrl: './modal-service.component.html',
  styleUrls: ['./modal-service.component.scss']
})
export class ModalServiceComponent implements OnInit {
    @Input() data: any;

    ProductOptions = [];
    EnvOptions = [];
    constructor(
        private productService: ProductService,
        private appService: AppService
    ) { }

    ngOnInit(): void {
        this.getProducts();
        this.getAppEnvs();
    }

    private getAppEnvs() {
        this.appService.getAppEnvs()
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.EnvOptions = data.data.appenvs;
            });
    }
    private getProducts() {
        this.productService.getProducts()
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.ProductOptions = data.data.products;
            });
    }
}
