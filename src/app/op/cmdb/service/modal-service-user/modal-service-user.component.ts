import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/@core/services/user.service';


@Component({
  selector: 'app-modal-service-user',
  templateUrl: './modal-service-user.component.html',
  styleUrls: ['./modal-service-user.component.scss']
})
export class ModalServiceUserComponent implements OnInit {

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
