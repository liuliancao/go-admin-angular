import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'ng-devui/modal';
import { App } from 'src/app/@shared/models/app';
import { Cluster } from 'src/app/@shared/models/cluster';
import { User } from 'src/app/@shared/models/user';
import { AppService } from 'src/app/@core/services/app.service';
import { ModalServiceUserComponent } from '../modal-service-user/modal-service-user.component';
import { ModalServiceClusterComponent } from '../modal-service-cluster/modal-service-cluster.component';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
    id = Number(this.route.snapshot.paramMap.get('id'));
    service = {id:0, name: '', description: ''};
    clusterList: Cluster[] = [];
    userList: User[] = [];

    busy: Subscription;
    constructor(
        private route: ActivatedRoute,
        private appService: AppService,
        private dialogService: DialogService
    ) { }

    ngOnInit(): void {
        this.getService();
        this.getServiceClusters();
        this.getAppUsers();

    }

    private getService(): void {
        this.appService.getApp(this.id)
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.service = data.data;
            })
    }

    private getServiceClusters(): void {
        this.appService.getAppClusters(this.id)
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.clusterList = data.data.clusters;
            })
    }

    openBindServiceUserDialog(dialogtype?: string) {
        const results = this.dialogService.open({
            id: 'openBindServiceUserService',
            maxHeight: '800px',
            title: '添加服务负责人',
            content: ModalServiceUserComponent,
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
                        data.a_id = this.id;
                        this.createServiceUser(data);
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
                a_id: 0,
            },
        });
    }
    openBindServiceClusterDialog(dialogtype?: string) {
        const results = this.dialogService.open({
            id: 'openBindServiceClusterService',
            maxHeight: '800px',
            title: '添加服务负责人',
            content: ModalServiceClusterComponent,
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
                        data.c_id = data.cluster.ID;
                        delete data.user;
                        data.a_id = this.id;
                        this.createServiceCluster(data);
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
                c_id: 0,
                a_id: 0,
            },
        });
    }

    private createServiceUser(data) {
        this.busy = this.appService
            .createAppUser(data)
            .subscribe((res) => {
                console.log(res);
            })
        location.reload();
    }
    private createServiceCluster(data) {
        this.busy = this.appService
            .createAppCluster(data)
            .subscribe((res) => {
                console.log(res);
            })
        location.reload();
    }

    private getAppUsers(){
        this.appService.getAppUsers(this.id)
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.userList = data.data.users;
            })
    }
}
