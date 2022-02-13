import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResourceService } from 'src/app/@core/services/resource.service';
import { Resource, ResourceType } from 'src/app/@shared/models/resource';
import { DialogService } from 'ng-devui/modal';
import { ModalResourceComponent } from './modal-resource/modal-resource.component';
import { ModalResourceTypeComponent } from './modal-resource-type/modal-resource-type.component';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['../management.component.scss']
})
export class ResourcesComponent implements OnInit {

    resourceTypeList: ResourceType[] = [];
    resourceList: Resource[] = [];
    busy: Subscription;

    private getTypeList() {
        this.busy = this.resourceService
            .getResourceTypes()
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.resourceTypeList = data.data.resourceTypes;
            })
    }
    private getList() {
        this.busy = this.resourceService
            .getResources()
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.resourceList = data.data.resources;
            })
    }
    constructor(
        private dialogService: DialogService,
        private resourceService: ResourceService,
    ) { }



    ngOnInit(): void {
        this.getTypeList();
        this.getList();
    }

    private createResourceType(data) {
        this.busy = this.resourceService
            .createResourceType(data)
            .subscribe((res) => {
                console.log(res);
            })
    }
    private createResource(data) {
        this.busy = this.resourceService
            .createResource(data)
            .subscribe((res) => {
                console.log(res);
            })
    }
    openCreateResourceTypeDialog(dialogtype?: string) {
        const results = this.dialogService.open({
            id: 'createResourceTypeService',
            maxHeight: '800px',
            title: '新建资源类型',
            content: ModalResourceTypeComponent,
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
                        const html_form_json = results.modalContentInstance.HTMLFormJSON;
                        data.html_form_json = JSON.stringify(html_form_json);
                        console.log(data);
                        this.createResourceType(results.modalContentInstance.data);
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
            },
        });
    }

    openCreateResourceDialog(dialogtype?: string) {
        const results = this.dialogService.open({
            id: 'createResourceService',
            maxHeight: '300px',
            title: '新建资源记录',
            content: ModalResourceComponent,
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
                        console.log(data);
                        const postdata = {
                            "data_json": JSON.stringify(data.defaultRowData),
                            "name": data["name"],
                            "t_id": data["data_json"]["ID"],
                            "description": data["description"]
                        }
                        this.createResource(postdata);
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
                resourcesTypeList: this.resourceTypeList,
                formConfig: {},
                defaultRowData: {}
            },
        });
    }
}
