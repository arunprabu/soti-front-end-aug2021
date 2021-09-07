import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  userData: any;
  duplicateUserData: any;

  isUpdated = false;

  constructor( private userService: UserService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    console.log('In ngOnInit');

    // read URL Param 
    let userId = this.route.snapshot.paramMap.get('id');

    this.userService.getUserById(userId)
      .subscribe( ( res: any) => {
        console.log(res);
        this.userData = res;
      });

  }

  handleEditModalOpen(): void {
    this.duplicateUserData = { ...this.userData };  // Shallow Copy
  }

  async handleUpdate(){
    console.log(this.duplicateUserData); // before sending to the service

    let status = await this.userService.updateUser(this.duplicateUserData);
    console.log(status);

    if(status && status.id){
      this.isUpdated = true;
    }
  }

}
