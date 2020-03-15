import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authServise: AuthService,private router:Router) { } 

  ngOnInit(): void {  }

  logoutUser(){
    this.authServise.logOut();
    this.router.navigate(['/']);
  }

}
