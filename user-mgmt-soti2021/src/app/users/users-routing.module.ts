import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';

// Feature routing config / child routing config 
const usersRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'add', component: AddUserComponent },
  { path: ':id', component: UserDetailsComponent }, // URL Param : id
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes)// register the child routes
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
