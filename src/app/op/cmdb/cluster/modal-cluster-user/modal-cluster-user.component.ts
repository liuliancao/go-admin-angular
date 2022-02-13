import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/@core/services/user.service';

@Component({
  selector: 'app-modal-cluster-user',
  templateUrl: './modal-cluster-user.component.html',
  styleUrls: ['./modal-cluster-user.component.scss']
})
export class ModalClusterUserComponent implements OnInit {
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
