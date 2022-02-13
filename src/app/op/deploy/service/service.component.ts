import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/@core/services/app.service';
import { MacroService } from 'src/app/@core/services/macro.service';
import { DialogService } from 'ng-devui/modal';
import { DeployService } from 'src/app/@core/services/deploy.service';

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: ['../../cmdb/management/management.component.scss']
})
export class ServiceComponent implements OnInit {
    service = { id: 0, name: '', description: ''};
    id = Number(this.route.snapshot.paramMap.get('id'));
    busy: Subscription;

    deployData = {};
    constructor(
        private route: ActivatedRoute,
        private appService: AppService,
        private dialogService: DialogService,
        private deployService: DeployService,
    ) { }

    ngOnInit(): void {
        this.getService();
    }

    private getService() {
        this.deployService.getHostDeploys(this.id)
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.deployData = data.data.hostdeploys;
            })
    }
}
