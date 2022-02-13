import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/@core/services/app.service';
import { HostService } from 'src/app/@core/services/host.service';
import { MacroService } from 'src/app/@core/services/macro.service';
import { DialogService } from 'ng-devui/modal';
import { DeployService } from 'src/app/@core/services/deploy.service';
import Quill from 'quill';

@Component({
    selector: 'app-service-config',
    templateUrl: './service-config.component.html',
    styleUrls: ['../../../cmdb/management/management.component.scss']
})
export class ServiceConfigComponent implements OnInit {

    activeTabID = "appMacros";
    public quill: any;

    service = { id: 0, name: '', description: ''};
    id = Number(this.route.snapshot.paramMap.get('id'));

    busy: Subscription;

    data = {
        "appName": "",
        "appID": "",
        "appSourceLocation": "",
        "appLocation":"",
        "logLocation":"",
        "versionScript": "",
        "deployScript": "",
        "startScript": "",
        "stopScript": "",
        "restartScript": "",
        "reloadScript": "",
        "checkScript": ""
    };

    // used for app arrange tab
    arrange = {
        "appTaskXml": "",
        "key": "",
        "name": "",
        "description": "",
    };
    listData = [];
    appData = [];
    constructor(
        private route: ActivatedRoute,
        private appService: AppService,
        private dialogService: DialogService,
        private macroService: MacroService,
        private hostService: HostService,
        private deployService: DeployService,
    ) { }

    ngOnInit(): void {
        this.getService();
        this.getServiceConfig();
    }

    private getService() {
        this.appService.getApp(this.id)
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.service = data.data;
                this.setData(this.service);

            })
    }

    private getServiceConfig() {
        this.busy = this.macroService
            .getMacros(this.service.name, "setting")
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                const initData = data.data.macros;
                initData.forEach((value, key) => {
                    this.data[value.key] = value.value;
                })
                console.log(this.data);
            })

    }
    private setData(service) {
        this.data = {
            "appName": service.name,
            "appID": service.ID.toString(),
            "appSourceLocation": "/data/"+service.name+"/source",
            "appLocation":"/data/"+service.name,
            "logLocation":"/data/"+service.name+"/logs",
            "versionScript": "",
            "deployScript": "",
            "startScript": "",
            "stopScript": "",
            "restartScript": "",
            "reloadScript": "",
            "checkScript": "",
        };
    }
    addServiceConfig() {
        for (var key in this.data) {
            const postdata =                 {
                "namespace": this.service.name,
                "name": key,
                "key": key,
                "value": this.data[key],
                "description": "deploy add",
                "m_type": "setting",
            };
            this.addOrUpdateMacro(postdata);
        };
    }

    // used for tab change
    activeTabChange(e) {
        if(this.activeTabID == "appArrange") {
            if (this.listData.length == 0) {
                this.getAppMacros(this.service.name, "arrange")
            }

            /*this.quill = new Quill('#myEditor', {
              theme: 'snow',
              modules: {
              toolbar: {
              container: [ , [ 'emoji' ] ],
              handlers: {
              emoji() {
              console.log('插入表情');
              }
              }
              },
              }
              });*/
        };
        if(this.activeTabID == "appHosts") {
            if (this.appData.length == 0) {
                this.getAppHosts();
            }
        }
    };

    // used for app arrange tab
    private addOrUpdateMacro(data) {
        this.busy = this.macroService
            .addOrUpdateMacro(data)
            .subscribe((res) => {
                console.log(res);
            })
    }

    private getAppMacros(namespace, m_type) {
        this.busy = this.macroService
            .getMacros(namespace, m_type)
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.listData = data.data.macros;
            })
    };
    private getAppHosts() {
        this.busy = this.hostService
            .getAppHosts(this.id)
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.appData = data.data.hosts;
            })
    };

    addAppArrange() {
        const data = {
            "namespace": this.service.name,
            "key": this.arrange.key,
            "name": this.arrange.name,
            "value": this.arrange.appTaskXml,
            "encrypt": 0,
            "description": this.arrange.description,
            "m_type": "arrange",
        };
        this.addOrUpdateMacro(data);
    };

    batchAdd() {
        for (let item of this.appData) {
            const postdata = {"a_id": this.id, "h_id": item.id};
            console.log(postdata);
            this.busy = this.deployService
                .createHostDeploy(postdata)
                .subscribe((res) => {
                    const data = JSON.parse(JSON.stringify(res));
                    console.log(data);
                })
        }
    };
    onRowCheckChange(e, index, item) {
    };
}
