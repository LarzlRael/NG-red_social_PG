import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from 'src/app/services/photo-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private photoService: PhotoServiceService

  ) { }

  ngOnInit() {
    this.getALlPhotos();
  }
  //*******************Metodo para obtener todas mis fotos */
  AllPhotos: any = [];
  getALlPhotos() {
    this.photoService.getAllPhotos().subscribe(
      res=>{
        this.AllPhotos = res,
        console.log(this.AllPhotos)
      },
      err=>{
        console.log(err)
      }
    )
  }
//******************************* */
}
