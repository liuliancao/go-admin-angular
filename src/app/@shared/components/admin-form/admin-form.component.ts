import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormConfig } from './admin-form.type';

@Component({
  selector: 'da-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {

  @Input() formConfig: FormConfig = {
      layout: 'horizontal',
      labelSize: 'sm',
      items: [],
      showSubmit: true,
  };

  _formData = {};

  @Input() set formData(val) {
    this._formData = JSON.parse(JSON.stringify(val));
  }

  @Output() submitted = new EventEmitter();

  @Output() canceled = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  submitPlanForm({ valid }) {
    if (valid) {
      this.submitted.emit(this._formData);
    }
  }

  cancel() {
    this.canceled.emit();
  }
}
