import { Component, OnInit, Input } from '@angular/core';
import { ClusterService } from 'src/app/@core/services/cluster.service';

@Component({
  selector: 'app-modal-service-cluster',
  templateUrl: './modal-service-cluster.component.html',
  styleUrls: ['./modal-service-cluster.component.scss']
})
export class ModalServiceClusterComponent implements OnInit {

    ClusterOptions = [];
    @Input() data: any;
    constructor(
        private clusterService: ClusterService
    ) { }

    ngOnInit(): void {
        this.getClusters();
    }

    private getClusters() {
      this.clusterService.getClusters()
          .subscribe((res) => {
              const data = JSON.parse(JSON.stringify(res));
              this.ClusterOptions = data.data.clusters;
          })
  }
}
