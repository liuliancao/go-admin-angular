import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-resource-detail',
  templateUrl: './add-resource-detail.component.html',
  styleUrls: ['./add-resource-detail.component.scss']
})
export class AddResourceDetailComponent implements OnInit {

    @Input() data: any;

    constructor() { }
    ngOnInit(): void {
    }

}
