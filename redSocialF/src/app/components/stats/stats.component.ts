import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from 'src/app/services/photo-service.service';
import { CommentsServiceService } from 'src/app/services/comments-service.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(

    private photoService: PhotoServiceService,
    private commentService: CommentsServiceService
  ) { }

  ngOnInit() {

    this.getPopulars();
    this.lastComments();
  }
  populars: any = [];
  lastetComments: any = [];
  getPopulars() {
    this.photoService.mostLikesphotos().subscribe(
      res => {
        this.populars = res,
          console.log(this.populars)
      },
      err => {
        console.log(err)
      }
    )
  }

  lastComments() {
    this.commentService.lastedComments().subscribe(
      res => {
        this.lastetComments = res,
        console.log(this.lastetComments)
      },
      err => {
        console.log(err)
      }
    )
  }
}
