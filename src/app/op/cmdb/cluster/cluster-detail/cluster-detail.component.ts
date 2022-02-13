import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DialogService } from 'ng-devui/modal';
import { Cluster } from 'src/app/@shared/models/cluster';
import { ClusterService } from 'src/app/@core/services/cluster.service';
import { Host } from 'src/app/@shared/models/host';
import { User } from 'src/app/@shared/models/user';
import { ModalClusterUserComponent } from '../modal-cluster-user/modal-cluster-user.component';
import { ModalClusterHostComponent } from '../modal-cluster-host/modal-cluster-host.component';

@Component({
  selector: 'app-cluster-detail',
  templateUrl: './cluster-detail.component.html',
  styleUrls: ['./cluster-detail.component.scss']
})
export class ClusterDetailComponent implements OnInit {

    cluster = {id:0, name:'', description: ''};
    id = Number(this.route.snapshot.paramMap.get('id'));
    hostList: Host[] = [];
    userList: User[] = [];
    busy: Subscription;
    constructor(
        private route: ActivatedRoute,
        private clusterService: ClusterService,
        private dialogService: DialogService
    ) { }

    ngOnInit(): void {
        this.getCluster();
        this.getClusterHosts();
        this.getClusterUsers();
    }

    private getCluster() {

        this.clusterService.getCluster(this.id)
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.cluster = data.data;
            })
    }

    private getClusterHosts(): void {
        this.clusterService.getClusterHosts(this.id)
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.hostList = data.data.hosts;
            })
    }
    private createClusterUser(data) {
        this.busy = this.clusterService
            .createClusterUser(data)
            .subscribe((res) => {
                console.log(res);
            })
        location.reload();
    }
    private createClusterHost(data) {
        this.busy = this.clusterService
            .createClusterHost(data)
            .subscribe((res) => {
                console.log(res);
            })
    }

    private getClusterUsers(){
        this.clusterService.getClusterUsers(this.id)
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.userList = data.data.users;
            })
    }

    openBindClusterUserDialog(dialogtype?: string) {
        const results = this.dialogService.open({
            id: 'openBindClusterUserCluster',
            maxHeight: '800px',
            title: '添加服务负责人',
            content: ModalClusterUserComponent,
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
                        data.c_id = this.id;
                        this.createClusterUser(data);
                        results.modalInstance.hide();
                        location.reload();
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
            },
        });
    }

    openBindClusterHostDialog(dialogtype?: string) {
        const results = this.dialogService.open({
            id: 'openBindClusterHostCluster',
            maxHeight: '800px',
            title: '绑定主机到集群',
            content: ModalClusterHostComponent,
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
                        data.h_id = data.host.id;
                        delete data.host;
                        data.c_id = this.id;
                        this.createClusterHost(data);
                        results.modalInstance.hide();
                        location.reload();
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
            },
        });
    }
}
