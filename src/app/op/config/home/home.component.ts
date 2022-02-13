import { Component, OnInit } from '@angular/core';
import { DialogService, EditableTip, TableWidthConfig } from 'ng-devui';
import { Subscription } from 'rxjs';
import { MacroService } from 'src/app/@core/services/macro.service';
import { ModalConfigComponent } from './modal-config/modal-config.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../config.component.scss']
})
export class HomeComponent implements OnInit {
  busy: Subscription;

    listData = [];

  defaultRowData = {
      ID: '',
      namespace: 'default',
      name: '',
      key: '',
      value: '',
      description: '',
  };

  tableWidthConfig: TableWidthConfig[] = [
    {
      field: 'ID',
      width: '150px',
    },
    {
      field: 'namespace',
      width: '100px',
    },
    {
      field: 'name',
      width: '200px',
    },
    {
      field: 'key',
      width: '200px',
    },
    {
      field: 'value',
      width: '100px',
    },
    {
      field: 'description',
      width: '200px',
    },
    {
      field: 'created_by',
      width: '100px',
    },
  ];

    constructor(
        private macroService: MacroService,
        private dialogService: DialogService
  ) { }

    ngOnInit(): void {
        this.getList();
    }

    getList() {
        this.busy = this.macroService
            .getAllMacros()
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.listData = data.data.macros;
                console.log(this.listData);
            })
    }
    private createMacro(data) {
        this.busy = this.macroService
            .createMacro(data)
            .subscribe((res) => {
                console.log(res);
            })
    }

    openCreateConfigDialog(dialogtype?: string) {
        const results = this.dialogService.open({
            id: 'createConfigService',
            maxHeight: '500px',
            title: '新建配置',
            content: ModalConfigComponent,
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
                        this.createMacro(data);
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
                name: '',
                description: '',
            },
        });
    }

}
