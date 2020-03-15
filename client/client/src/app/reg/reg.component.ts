import { Component, OnInit } from '@angular/core';
import {CheckFormService} from '../check-form.service';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

import{FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

 username:String;
 email:String;
 password:String;
 role:string[];
 

  constructor(
    private checkForm : CheckFormService ,
    private flashMessages :FlashMessagesService,
    private router:Router,
    private authService:AuthService  
    ) { }

  ngOnInit(): void {
    
  }
  userRegClick(){
    const user = {
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role
    };

  if(!this.checkForm.checkInput(user.username)) this.flashMessages.show("Ok",{
  cssClass:'alert-danger',
  timeout:4000});

  else if(!this.checkForm.checkInput(user.password)) this.flashMessages.show("Ok",{
  cssClass:'alert-danger',
  timeout:4000});

  else if(!this.checkForm.checkInput(user.email)) this.flashMessages.show("Ok",{
  cssClass:'alert-danger',
  timeout:4000});

  this.authService.regUser(user).subscribe(arg => {
      if(arg.success){ 
        this.flashMessages.show("Ok",{
        cssClass:'alert-danger',
        timeout:4000});}
      else{
        this.router.navigate(['/auth']);
      }
    });
  }
  

}
