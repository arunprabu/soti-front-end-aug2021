import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit, OnDestroy {

  userList: User[] = [];
  usersSubscription: Subscription | undefined = undefined;
 
  constructor( private userService: UserService ) { // 1. connect with the service using dependency injection
    console.log('Inside Constructor');
  }

  // Lifecycle hook / life cycle method
  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // Called when the comp comes into view
    // Ideal place for you to fire ajax calls

    // 2. send the req to the service
    this.usersSubscription = this.userService.getUsers()
      .subscribe( (res: User[]) => {
        console.log(res); // 3. get the resp from the service
        this.userList = res;
      });
  }

  ngOnDestroy(): void { // lifecycle hook
    // will be called when the comp goes out of the view
    console.log('Inside Destroy');
    // ideal place for you to unsubscribe, clear the data, remove timeouts, remove intervals
    this.usersSubscription.unsubscribe();
    if(this.userList && this.userList.length> 0){
      this.userList.length = 0;
    }
  }

}
