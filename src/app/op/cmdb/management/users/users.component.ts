import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService } from 'ng-devui/modal';
import { User } from 'src/app/@shared/models/user';
import { UserService } from 'src/app/@core/services/user.service';
import { DepartmentService } from 'src/app/@core/services/department.service';
import { ModalUserComponent } from './modal-user/modal-user.component';
import { ModalDepartmentComponent } from './modal-department/modal-department.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['../management.component.scss']
})
export class UsersComponent implements OnInit {

    busy: Subscription;
    userList: User[] = [];
    constructor(
        private userService: UserService,
        private departmentService: DepartmentService,
        private dialogService: DialogService,
    ) { }

    ngOnInit(): void {
        this.getList();
    }

    private getList() {
        this.busy = this.userService
            .getUsers()
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.userList = data.data.users;
            })
    }
    private createUser(data) {
        this.busy = this.userService
            .createUser(data)
            .subscribe((res) => {
                console.log(res);
            })
        location.reload();
    }
    private createDepartment(data) {
        this.busy = this.departmentService
            .createDepartment(data)
            .subscribe((res) => {
                console.log(res);
            })
        location.reload();
    }
    openCreateUserDialog(dialogtype?: string) {
        const results = this.dialogService.open({
            id: 'createUserService',
            maxHeight: '500px',
            title: '新建用户',
            content: ModalUserComponent,
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
                        data.d_id = data.department.ID;
                        delete data.department;
                        this.createUser(data);
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
    openCreateDepartmentDialog(dialogtype?: string) {
        const results = this.dialogService.open({
            id: 'createDepartmentService',
            maxHeight: '800px',
            title: '新建部门',
            content: ModalDepartmentComponent,
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
                        this.createDepartment(data);
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
