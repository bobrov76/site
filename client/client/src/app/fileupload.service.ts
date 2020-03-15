import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule,HttpEventType } from '@angular/common/http';
import {  CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  constructor(
    private http: HttpClient,
    private cookieService:CookieService ) { }

  onUpload(selectedFile) {
    const fd = new FormData();

    fd.append('filedata', selectedFile, selectedFile.name);

    return this.http.post('http://localhost:8080/upload', fd, {      
      reportProgress: true,
        observe: 'events'  
    })
    .subscribe(event => {
        if (event.type == HttpEventType.UploadProgress) {
            console.log('Upload Progress: ', Math.round(event.loaded / event.total * 100) + '%');
        } else if (event.type == HttpEventType.Response) console.log(event);
    });
  }
}

