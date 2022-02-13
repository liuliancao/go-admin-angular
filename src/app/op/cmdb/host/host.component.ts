import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DialogService, EditableTip, TableWidthConfig } from 'ng-devui';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/@core/data/listData';
import { Host } from 'src/app/@core/data/host';
import { HostService } from 'src/app/@core/services/host.service';
import { ModalHostComponent } from './modal-host/modal-host.component';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {
    status = {"1": "在线", "2": "异常"};
    options = ['normal', 'borderless', 'bordered'];
    sizeOptions = ['sm', 'md', 'lg'];
    layoutOptions = ['auto','fixed'];

    //for search input
    keyword = '';

    searchForm = {
        borderType: 'normal',
        size: 'normal',
        layout: 'auto'
    };

    hostsDataSource: Item[] = [];

    formConfig = {
        layout: 'horizontal',
        items: [
            {
                label: 'ID',
                prop: 'id',
                type: 'input',
            },
            {
                label: 'Htype',
                prop: 'htype',
                type: 'input',
                required: true,
                rule: {
                    validators: [{ required: true }]
                }
            },
        ],
    };

    pager = {
        total: 0,
        index: 1,
        size: 10,
    };

    busy: Subscription;
    constructor(
        private hostService: HostService,
        private dialogService: DialogService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        this.getList();
    }

    getList() {
        this.busy = this.hostService
            .getHosts(this.pager, this.keyword)
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.hostsDataSource = data.data.hosts;
                for(let host of this.hostsDataSource) {
                    console.log("host:", host);
                    const pids = host['pid'].split(",");
                    const aids = host['aid'].split(",");
                    const cids = host['cid'].split(",");

                    host['products']= [];
                    host['apps'] = [];
                    host['clusters'] = [];
                    for(const [index, product] of host['product'].split(",").entries()){
                        const pd = {"id": pids[index], "name": product};
                        host['products'].push(pd);
                    }
                    for(const [index, app] of host['app'].split(",").entries()){
                        const ap = {"id": aids[index], "name": app};
                        host['apps'].push(ap);
                    }
                    for(const [index, cluster] of host['cluster'].split(",").entries()){
                        const cu = {"id": cids[index], "name": cluster};
                        host['clusters'].push(cu);
                    }

                }
                this.pager.total = data.data.total;
            });
    }

    onPageChange(e) {
        this.pager.index = e;
        this.getList();
    }

    onSizeChange(e) {
        this.pager.size = e;
        this.getList();
    }

    reset() {
        this.searchForm = {
            borderType: 'normal',
            size: 'normal',
            layout: 'auto'
        };
        this.pager.index = 1;
        this.getList()
    }
    onSearch() {
        this.pager.index = 1;
        this.getList();
    }

    openHostDetailDialog(rowItem: Host, dialogtype?: string) {
        const results = this.dialogService.open({
            id: 'hostDetailService',
            maxHeight: '800px',
            title: '服务器详情',
            content: ModalHostComponent,
            backdropCloseable: true,
            onClose: () => {
                console.log('closed');
            },
            buttons: [
            ],
            data: {
                name: '',
                description: '',
                host: rowItem,
            },
        });
    }
}
