import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { tokenNotExpired} from 'angular2-jwt';
import {  CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:any;
  user:any;
  constructor(private http:Http,private cookieService:CookieService ) { }

  regUser(user){
    let headers = new Headers();
    //headers.append('Content-Type','aplication/json');
    return this.http.post('http://localhost:8080/api/auth/signup',
    user).pipe(map(res=>res.json()));
  }

  loginUser(user){
    let headers = new Headers();
    //headers.append('Content-Type','aplication/json');
    return this.http.post('http://localhost:8080/api/auth/signin',
    user).pipe(map(res=>res.json()));
  }

  storeUser(user,token){
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.cookieService.set('token',token);
    this.cookieService.set('user',JSON.stringify(user));

    this.token=token;
    this.user = user;
  }

  logOut(){
    this.token = null;
    this.user = null;
    this.cookieService.deleteAll();
    localStorage.clear();
  }

  isLogIn(){
    return tokenNotExpired();
  }

}
