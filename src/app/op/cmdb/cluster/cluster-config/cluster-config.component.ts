import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ClusterService } from 'src/app/@core/services/cluster.service';
import { DialogService } from 'ng-devui/modal';

@Component({
  selector: 'app-cluster-config',
  templateUrl: './cluster-config.component.html',
  styleUrls: ['../../../cmdb/management/management.component.scss']
})
export class ClusterConfigComponent implements OnInit {

    cluster = { id: 0, name: '', description: ''};
    id = Number(this.route.snapshot.paramMap.get('id'));

    busy: Subscription;

    constructor(
        private route: ActivatedRoute,
        private clusterService: ClusterService,
        private dialogService: DialogService,
    ) { }

    ngOnInit(): void {
        this.getCluster();
        this.getClusterConfig();
    }

    private getCluster() {
        this.clusterService.getCluster(this.id)
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.cluster = data.data;
            })
    }

    private getClusterConfig() {

    }
}
