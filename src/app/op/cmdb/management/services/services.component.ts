import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService } from 'ng-devui/modal';
import { AppService } from 'src/app/@core/services/app.service';
import { App } from 'src/app/@shared/models/app';
import { ModalServiceComponent } from './modal-service/modal-service.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['../management.component.scss']
})
export class ServicesComponent implements OnInit {

    busy: Subscription;
    serviceList: App[] = [];

    constructor(
        private appService: AppService,
        private dialogService: DialogService,
    ) { }

    ngOnInit(): void {
        this.getList()
    }

    private getList() {
        this.busy = this.appService
            .getApps()
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.serviceList = data.data.apps;
            })
    }
    createService(data) {
        console.log(data);
        this.busy = this.appService
            .createApp(data)
            .subscribe((res) => {
                console.log(res);
            })
        location.reload();
    };

    openCreateServiceDialog(dialogtype?: string) {
        const results = this.dialogService.open({
            id: 'createServiceService',
            maxHeight: '700px',
            title: '新建服务',
            content: ModalServiceComponent,
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
                        data.pid = data.product.ID;
                        data.eid = data.env.ID;
                        delete data.product;
                        delete data.env;
                        this.createService(data);
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
