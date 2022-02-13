import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-modal-config',
  templateUrl: './modal-config.component.html',
  styleUrls: ['./modal-config.component.scss']
})
export class ModalConfigComponent implements OnInit {

    EncryptOptions = [1, 0];
    @Input() data: any;
    constructor(
    ) { }

    ngOnInit(): void {
    }
}
