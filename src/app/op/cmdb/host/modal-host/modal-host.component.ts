import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-host',
  templateUrl: './modal-host.component.html',
  styleUrls: ['./modal-host.component.scss']
})
export class ModalHostComponent implements OnInit {
    @Input() data: any;

  constructor() { }

  ngOnInit(): void {
      this.data.host.extras = JSON.parse(this.data.host.extras);
      console.log(this.data);
  }

}
