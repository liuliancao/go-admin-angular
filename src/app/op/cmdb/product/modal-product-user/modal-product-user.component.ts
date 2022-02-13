import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/@core/services/user.service';

@Component({
  selector: 'app-modal-product-user',
  templateUrl: './modal-product-user.component.html',
  styleUrls: ['./modal-product-user.component.scss']
})
export class ModalProductUserComponent implements OnInit {

    UserOptions = [];
    @Input() data: any;
    constructor(
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.getUsers();
  }

    private getUsers() {
      this.userService.getUsers()
          .subscribe((res) => {
              const data = JSON.parse(JSON.stringify(res));
              this.UserOptions = data.data.users;
          })

  }

}
