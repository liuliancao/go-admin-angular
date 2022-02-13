import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'ng-devui/modal';
import { AddHtmlFormComponent } from '../add-html-form/add-html-form.component';

@Component({
  selector: 'app-modal-resource-type',
  templateUrl: './modal-resource-type.component.html',
  styleUrls: ['./modal-resource-type.component.scss']
})
export class ModalResourceTypeComponent implements OnInit {

    @Input() data: any;
    constructor(
        private dialogService: DialogService,
    ) { }

    ngOnInit(): void {
    }
    addFormField = false;

    HTMLFormJSON = {
        layout: 'horizontal',
        labelSize: '60',
        items: [],
        showSubmit: false,
    };

    formSelectOptions = ["input","textarea", "select"]

    formConfig = {
        layout: 'horizontal',
        labelSize: '60',
        showSubmit: true,
        items: [
            {
                label: "label",
                prop: "label",
                type: "input",
            },
            {
                label: "prop",
                prop: "prop",
                type: "input",
            },
            {
                label: "fieldtype",
                prop: "type",
                type: "select",
                options: this.formSelectOptions,
            },
            {
                label: "补充字段",
                prop: "others",
                type: "textarea",
            }
        ]
    }
    defaultRowData = {
        label: '',
        prop: '',
        type: '',
        options: [],
    };

    openAddHtmlFormDialog(dialogtype?: string) {
        const results = this.dialogService.open({
            id: 'addHtmlFormService',
            maxHeight: '500px',
            title: '新增字段',
            content: AddHtmlFormComponent,
            backdropCloseable: true,
            onClose: () => {
                console.log('closed');
            },
            buttons: [
                {
                    cssClass: 'stress',
                    text: '确认',
                    handler: ($event: Event) => {
                        const newData = results.modalContentInstance.defaultRowData;
                        if(newData.type == "select") {
                            newData.options = newData.options.split(",");
                        }


                        this.HTMLFormJSON.items.push(newData);
                        console.log(this.HTMLFormJSON);
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

    quickRowAdded(e) {
        const newData = { ...e };
        this.HTMLFormJSON.items.push(newData);
        this.addFormField = false;
        console.log(this.HTMLFormJSON);
    }

    quickRowCancel() {
      this.addFormField = false;
    }
}
