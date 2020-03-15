import { Component, OnInit } from '@angular/core';
import {CheckFormService} from '../check-form.service';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import{FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-accaunt',
  templateUrl: './accaunt.component.html',
  styleUrls: ['./accaunt.component.css']
})
export class AccauntComponent implements OnInit {

  constructor( private checkForm : CheckFormService ,
    private flashMessages :FlashMessagesService,
    private router:Router,
    private authService:AuthService  ) { }

  ngOnInit(): void {
  }
  
  logoutUser(){
    this.authService.logOut();
    this.router.navigate(['/']);
  }
}
