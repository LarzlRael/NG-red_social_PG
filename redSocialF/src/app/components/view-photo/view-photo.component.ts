import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoServiceService } from 'src/app/services/photo-service.service';

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.css']
})
export class ViewPhotoComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private photoService: PhotoServiceService

  ) { }

  id: number | string
  photo: any = [];
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
      this.photoService.getPhoto(this.id).subscribe(
        res => {
          this.photo = res[0],
          console.log(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }

}
