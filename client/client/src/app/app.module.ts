import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AccauntComponent } from './accaunt/accaunt.component';

import {  CookieService } from 'ngx-cookie-service';
import {  IsLoggedIn } from './isLogged.guard';
import{FlashMessagesModule} from 'angular2-flash-messages';
import{FormsModule} from '@angular/forms';
import{CheckFormService} from './check-form.service';
import{AuthService} from './auth.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import {RouterModule,Routes} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';
const appRoute:Routes = [
  {path:'', component: HomeComponent},
  {path:'reg', component: RegComponent},
  {path:'auth', component: AuthComponent},
  {path:'accaunt', component: AccauntComponent, canActivate: [IsLoggedIn]},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegComponent,
    AuthComponent,
    HomeComponent,
    AccauntComponent,
    FooterComponent    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    CheckFormService,
    AuthService,
     IsLoggedIn,
     CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
