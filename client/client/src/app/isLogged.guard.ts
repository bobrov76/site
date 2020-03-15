import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class IsLoggedIn implements CanActivate{
    constructor(private authServise:AuthService,private router:Router){}

    canActivate(){
        if(this.authServise.isLogIn()) return true;
        else{
            this.router.navigate(['auth']);
            return false;
        }
    }
}