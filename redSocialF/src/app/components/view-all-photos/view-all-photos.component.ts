import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from 'src/app/services/photo-service.service';

@Component({
  selector: 'app-view-all-photos',
  templateUrl: './view-all-photos.component.html',
  styleUrls: ['./view-all-photos.component.css']
})
export class ViewAllPhotosComponent implements OnInit {

  photos: any = [];

  constructor(private photoService: PhotoServiceService) { }

  ngOnInit() {
    this.allPhotos();
  }

  allPhotos() {
    
    this.photoService.getAllPhotos().subscribe(
      res => {
        this.photos = res,
          console.log(res)
      }, err => {
        console.log(err)
      }
    )
  }

}
