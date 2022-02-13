import { Component, Input, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/@core/services/department.service';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit {
    @Input() data: any;
    departmentOptions = [];
    genderOptions = ["男","女"];

    constructor(
        private departmentService: DepartmentService
    ) { }

    ngOnInit(): void {
        this.getDepartments();
    }

    private getDepartments() {
        this.departmentService.getDepartments()
            .subscribe((res) => {
                const data = JSON.parse(JSON.stringify(res));
                this.departmentOptions = data.data.departments;
            });
    }
}
