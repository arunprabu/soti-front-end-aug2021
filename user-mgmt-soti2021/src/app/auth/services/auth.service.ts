import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  REST_API_URL = 'https://reqres.in/api/login';

  constructor( private http: HttpClient) { }

  login( formData: any) {
    console.log(formData);

    return this.http.post(this.REST_API_URL, formData)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  isAuth(): boolean {
    if(sessionStorage.getItem('authToken')) {
      return true;
    }else{
      return false;
    }
  }
}
