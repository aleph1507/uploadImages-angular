import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent {

  constructor(private httpClient: HttpClient) { }

  uploadFile(event){
    let elem = event.target;
    if(elem.files.length > 0){
      console.log(elem.files[0]);
      let formData = new FormData();
      formData.append('file', elem.files[0]);

      this.httpClient.post('http://localhost/angular/uploadImages/script.php', formData, { responseType: 'text'})
        .subscribe((data) => {
          console.log('Got some data from backend', data);
        }, (error) => {
          console.log('Error: ', error);
        });
    }
  }

}
