import { Component, OnInit } from '@angular/core';
import {FileuploadService} from '../fileupload.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  

  constructor(private fileUplouded : FileuploadService) { }

  ngOnInit(): void { 
    AOS.init({
      offset: 400, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000 // values from 0 to 3000, with step 50ms
    });
  }
  
 
 
  selectedFile: File = null;

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(){
    console.log("fileUplouded");
    this.fileUplouded.onUpload(this.selectedFile);  
  }  


}