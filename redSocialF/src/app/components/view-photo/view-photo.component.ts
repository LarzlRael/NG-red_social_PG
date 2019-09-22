import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoServiceService } from 'src/app/services/photo-service.service';
import { CommentsServiceService } from 'src/app/services/comments-service.service';

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.css']
})
export class ViewPhotoComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private photoService: PhotoServiceService,
    private router: Router,
    private commentService: CommentsServiceService

  ) { }

  id: number | string
  photo: any = [];

  ngOnInit() {

    this.getId();
    this.thisCommentsView();
    this.likeCount();
  }

  DeleteThisPhoto(id) {
    this.photoService.deletePhoto(id).subscribe(
      res => {
        console.log(res),
          this.router.navigate(['/add_photo'])
      },
      err => {
        console.log(err)
      }
    )
  }
  //************************************* **** */
  addNewComment(content: HTMLInputElement) {

    this.commentService.newComment(10, this.id, content.value).subscribe(
      res => {
        console.log(res),
          this.thisCommentsView()
      },
      err => {
        console.log(err)
      }
    )
    return false;
  }
  //************************************* **** */
  photoComments: any = [];

  thisCommentsView() {

    this.commentService.viewCommentsThisPhoto(this.id).subscribe(
      res => {
        this.photoComments = res
      },
      err => {
        console.log(err)
      }
    )
  }

  Ilike(id_img) {
    this.photoService.IlikeThisPhoto(id_img).subscribe(
      res => {
        console.log(res),
        this.likeCount()
      },
      err => {
        console.log(err)
      }
    )
  }

  //methodo apra obetener el id
  getId() {
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

  likeCounter: any = [];
  likeCount() {
    this.photoService.getPhoto(this.id).subscribe(
      res => {
        this.likeCounter = res[0]

      },
      err => {
        console.log(err)
      }
    )
  }
}
