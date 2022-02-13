import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService } from 'ng-devui/modal';
import { ClusterService } from 'src/app/@core/services/cluster.service';
import { Cluster } from 'src/app/@shared/models/cluster';
import { ModalClusterComponent } from './modal-cluster/modal-cluster.component';


@Component({
  selector: 'cluster-clusters',
  templateUrl: './clusters.component.html',
  styleUrls: ['../management.component.scss']
})
export class ClustersComponent implements OnInit {

    busy: Subscription;
    clusterList: Cluster[] = [];

    constructor(
        private clusterService: ClusterService,
        private dialogService: DialogService,
    ) { }

    ngOnInit(): void {
        this.getList();
    }

    private getList() {
        this.busy = this.clusterService
            .getClusters()
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.clusterList = data.data.clusters;
            })
    }
    private createCluster(data) {
        this.busy = this.clusterService
            .createCluster(data)
            .subscribe((res) => {
                console.log(res);
            })
        location.reload();
    }
    openCreateClusterDialog(dialogtype?: string) {
        const results = this.dialogService.open({
            id: 'createClusterService',
            maxHeight: '300px',
            title: '新建集群',
            content: ModalClusterComponent,
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
                        data.aid = data.service.ID;
                        delete data.service;
                        this.createCluster(data);
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
