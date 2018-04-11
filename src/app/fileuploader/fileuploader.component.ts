import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import {GalleryComponent} from '../gallery/gallery.component';

interface imgPostRes{
  file: string;
}

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent {

  @Input()
    gallery: GalleryComponent;

  constructor(private httpClient: HttpClient) { }

  uploadFile(event){
    let elem = event.target;
    if(elem.files.length > 0){
      console.log(elem.files[0]);
      let formData = new FormData();
      formData.append('file', elem.files[0]);

      this.httpClient.post<imgPostRes>('http://localhost/angular/uploadImages/script.php',
          formData, {responseType: 'json'})
        .subscribe((data) => {
          // let jsonRessponse = data.json();
          this.gallery.gotSomeDataFromTheBackend(data.file);
          console.log('Got some data from backend', data);
        }, (error) => {
          console.log('Error: ', error);
        });
    }
  }

}
