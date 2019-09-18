import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users-service.service';


@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  constructor(private userService: UsersServiceService) { }
  users: any = [];
  enabledUsers: any = [];
  disabledUsers: any = [];
  ngOnInit() {
    this.getUsers()
  }
  getUsers() {
    console.log('estoy funcionando');
    this.userService.getUsers().subscribe(
      res => {
        this.users = res,
          console.log(this.users)
      },
      err => console.log(err)
    )
  }
  enableUser(id) {
    this.userService.enableUser(id).subscribe(
      res => {


        this.enabledUsers = res;
        console.log(this.enabledUsers)
      },
      err => {
        console.log(err)
      }
    )
  }
  //disable user method
  disableThisUser(id) {
    this.userService.disableUser(id).subscribe(
      res => {
        this.disabledUsers = res;
        console.log(this.disabledUsers)
      },
      err => {
        console.log(err)
      }
    )
  }

}
