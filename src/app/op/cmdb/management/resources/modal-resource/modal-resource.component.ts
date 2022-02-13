import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from 'ng-devui/modal';
import { AddResourceDetailComponent } from '../add-resource-detail/add-resource-detail.component';

@Component({
  selector: 'app-modal-resource',
  templateUrl: './modal-resource.component.html',
  styleUrls: ['./modal-resource.component.scss']
})
export class ModalResourceComponent implements OnInit {

    @Input() data: any;
    constructor(
        private dialogService: DialogService
    ) { }

    resourcesTypeList = [];
    formConfig = {};
    defaultRowData = {};
    ngOnInit(): void {
        this.resourcesTypeList = this.data.resourcesTypeList;
     }

    renderForm(e) {
        this.data.formConfig = JSON.parse(this.data.data_json['html_form_json']);
    }
}
