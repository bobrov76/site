import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckFormService {

  constructor() { }

  checkInput(txt){
    if(txt == undefined) return false;
    else return true;
  }
}
