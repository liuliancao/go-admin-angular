import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-department',
  templateUrl: './modal-department.component.html',
  styleUrls: ['./modal-department.component.scss']
})
export class ModalDepartmentComponent implements OnInit {
    @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
