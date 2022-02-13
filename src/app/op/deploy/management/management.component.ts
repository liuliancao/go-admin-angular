import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/@core/services/app.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['../deploy.component.scss']
})
export class ManagementComponent implements OnInit {

    constructor(
        private appService: AppService
    ) { }

    ngOnInit(): void {
        this.getList()
    }

    keyword = "";

    busy: Subscription;

    cardList = [];

    getList() {
        this.busy = this.appService
            .getApps()
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                const appList = data.data.apps;
                this.cardList = appList.filter((i) => {
                    return i.name.toUpperCase().includes(this.keyword?.toUpperCase())
                })
            })
    }

    search() {
        this.getList()
    }
}
