import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/@core/services/app.service';

@Component({
  selector: 'app-modal-cluster',
  templateUrl: './modal-cluster.component.html',
  styleUrls: ['./modal-cluster.component.scss']
})
export class ModalClusterComponent implements OnInit {
    @Input() data: any;
    ServiceOptions = [];

    constructor(
        private appService: AppService,
    ) { }

    ngOnInit(): void {
        this.getServices();
  }

    private getServices() {
      this.appService.getApps()
          .subscribe((res) => {
              const data = JSON.parse(JSON.stringify(res));
              this.ServiceOptions = data.data.apps;
          })
  }
}
