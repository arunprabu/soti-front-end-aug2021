import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  isSaved = false;

  // Step 1: Have the form tag equivalent in TS 
  addUserForm: FormGroup = new FormGroup({
    // Step 2: Have the input equivalents in TS 
    // Refer HTML for step 3
    name: new FormControl('Arun', Validators.required), // Step 5: Let's work on Validations
    phone: new FormControl('123432', Validators.required), // For step 6 --- go to the HTML
    email: new FormControl('a@b.com', [Validators.required, Validators.email]), // multiple validators can be used in an element
  });

  constructor( private userService: UserService ) { // 1. connect with service using dependency injection

  }

  ngOnInit(): void {
  }

  handleAddUser(){
    console.log('submitted');
    console.log(this.addUserForm); // the form state 

    console.log(this.addUserForm.value); // submittable form data
    
    // 2. send the above data to the service
    this.userService.createUser(this.addUserForm.value)
      .subscribe( (res: any) => { // 3. get the resp from the service
        console.log(res);

        if(res && res.id){
          this.isSaved = true;
        }
      });
  }
}
