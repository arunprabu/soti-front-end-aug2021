import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  userList: User[] = [];
 
  constructor( private userService: UserService ) { // 1. connect with the service using dependency injection
    console.log('Inside Constructor');
  }

  // Lifecycle hook / life cycle method
  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // Called when the comp comes into view
    // Ideal place for you to fire ajax calls

    // 2. send the req to the service
    this.userService.getUsers()
      .subscribe( (res: User[]) => {
        console.log(res); // 3. get the resp from the service
        this.userList = res;
      });
  }

}
