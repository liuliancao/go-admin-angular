import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DialogService } from 'ng-devui/modal';
import { Product } from 'src/app/@shared/models/product';
import { App } from 'src/app/@shared/models/app';
import { User } from 'src/app/@shared/models/user';
import { ProductService } from 'src/app/@core/services/product.service';
import { ModalProductUserComponent } from '../modal-product-user/modal-product-user.component';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

    busy: Subscription;
    id = Number(this.route.snapshot.paramMap.get('id'));
    //@Input() product?: Product;
    product  = {id:0, name:'',description:''};
    appList: App[] = [];
    userList: User[] = [];
    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private dialogService: DialogService,
    ) { }

    ngOnInit(): void {
        this.getProduct();
        this.getProductApps();
        this.getProductUsers();
    }

    private getProduct(): void {
        this.productService.getProduct(this.id)
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.product = data.data;
            })
    }

    private getProductUsers(){
        this.productService.getProductUsers(this.id)
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.userList = data.data.users;
            })
    }
    private getProductApps(): void {
        this.productService.getProductApps(this.id)
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.appList = data.data.apps;
            })
    }
    openBindProductUserDialog(dialogtype?: string) {
        const results = this.dialogService.open({
            id: 'openBindProductUserService',
            maxHeight: '800px',
            title: '添加产品负责人',
            content: ModalProductUserComponent,
            backdropCloseable: true,
            onClose: () => {
                console.log('closed');
            },
            buttons: [
                {
                    cssClass: 'stress',
                    text: '确认',
                    handler: ($event: Event) => {
                        const data = results.modalContentInstance.data;
                        data.u_id = data.user.id;
                        delete data.user;
                        data.p_id = this.id;
                        this.createProductUser(data);
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
                u_id: 0,
                p_id: 0,
            },
        });
    }
    private createProductUser(data) {
        this.busy = this.productService
            .createProductUser(data)
            .subscribe((res) => {
                console.log(res);
            })
    }
}
