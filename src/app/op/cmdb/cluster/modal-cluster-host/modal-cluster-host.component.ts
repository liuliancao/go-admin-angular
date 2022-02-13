import { Component, OnInit, Input } from '@angular/core';
import { HostService } from 'src/app/@core/services/host.service';

@Component({
  selector: 'app-modal-cluster-host',
  templateUrl: './modal-cluster-host.component.html',
  styleUrls: ['./modal-cluster-host.component.scss']
})
export class ModalClusterHostComponent implements OnInit {

    HostOptions = [];
    @Input() data: any;
    constructor(
        private hostService: HostService
    ) { }

    ngOnInit(): void {
        this.getAllHosts();
    }

    private getAllHosts() {
        this.hostService.getAllHosts()
          .subscribe((res) => {
              const data = JSON.parse(JSON.stringify(res));
              this.HostOptions = data.data.hosts;
          })
    }
}
