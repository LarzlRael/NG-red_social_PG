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

  enabledUser: any = [];

  disabledUsers: any = [];

  ngOnInit() {
    this.updatePage();

  }

  newUser(name: HTMLInputElement, email: HTMLInputElement) {
    this.userService.addNewUser(name.value, email.value).subscribe(
      res => {
        console.log(res),
        this.updatePage();
      },
      err => {
        console.log(err)
      }
    )
    name.value = '';
    email.value = '';
    return false;
  }
  //******************************** */
  allEnableUsers: any = [];
  getEnableThoseUsers() {
    this.userService.getEnableUsers().subscribe(
      res=>{
        this.allEnableUsers=res,
        console.log(this.allEnableUsers)
      },
      err=>{
        console.log(err)
      }
    )
  }
  //************************************************* */
  getUsers() {

    this.userService.getUsers().subscribe(
      res => {
        this.users = res,
          console.log(this.users)
      },
      err => console.log(err)
    )
  }
  enableThisUser(id) {
    this.userService.enableUser(id).subscribe(
      res => {


        this.enabledUser = res;
        console.log(this.enabledUser),
        this.updatePage();
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
        console.log(this.disabledUsers),
        this.updatePage();
      },
      err => {
        console.log(err)
      }
    )
  }

  updatePage(){
    this.getUsers();
    this.getEnableThoseUsers();
  }

}
