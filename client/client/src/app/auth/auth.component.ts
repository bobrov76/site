import { Component, OnInit } from '@angular/core';
import {CheckFormService} from '../check-form.service';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import{FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
 
  username:String;
  password:String;

  constructor( private checkForm : CheckFormService ,
    private flashMessages :FlashMessagesService,
    private router:Router,
    private authService:AuthService  ) { }

  ngOnInit(): void {
  }
  userLoginClick(){
      const user = {
        username: this.username,
        password: this.password,
      };

      if(user.username!=undefined){
        if(user.password!=undefined){

      this.authService.loginUser(user).subscribe(data => {
        if(data.success){ 
          this.flashMessages.show("Ok",{
          cssClass:'alert-danger',
          timeout:4000});}
        else{
          this.router.navigate(['/accaunt']);
          this.authService.storeUser(data.user,data.accessToken);
        }
      });
    }
    else{this.flashMessages.show("Login Invalid",{cssClass:'alert-danger',timeout:4000});}
  }else{this.flashMessages.show("Password Invalid",{cssClass:'alert-danger',timeout:4000});}
  }
  

}
