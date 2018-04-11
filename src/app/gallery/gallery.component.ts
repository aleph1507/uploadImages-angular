import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  shoulIbeVisible: boolean = false;
  uuid = "blank";

  constructor() { }

  gotSomeDataFromTheBackend(uuid: string) {
    this.shoulIbeVisible = true;
    this.uuid = uuid;
  }

}
