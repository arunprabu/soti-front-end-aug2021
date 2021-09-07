import { Injectable } from "@angular/core";

interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class User implements IUser{
  id: number = 0;
  name: string = '';
  email: string = '';
  phone: string = '';

  // util methods around User...
  // filter users, total users 
}
