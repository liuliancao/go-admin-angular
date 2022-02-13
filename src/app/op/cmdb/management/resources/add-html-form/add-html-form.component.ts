import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-html-form',
  templateUrl: './add-html-form.component.html',
  styleUrls: ['./add-html-form.component.scss']
})
export class AddHtmlFormComponent implements OnInit {


    formSelectOptions = ["input","textarea", "select"]

    defaultRowData = {
        label: '',
        prop: '',
        type: '',
        options: [],
    };

    showSelectOptions = false;

    checkRowData(e) {

        if (this.defaultRowData.type == 'select') {
            this.showSelectOptions = true;
        } else {
            this.showSelectOptions = false;
        }

    }
    constructor() { }
    ngOnInit(): void {
    }

}
