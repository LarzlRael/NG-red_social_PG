import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { PhotoServiceService } from 'src/app/services/photo-service.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms'

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}
@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
//creando la interfaze de nuestro archivo

export class AddPhotoComponent implements OnInit {

  file: File;
  photoSelected: string | ArrayBuffer;
  constructor(
    private userService: UsersServiceService,
    private photoService: PhotoServiceService,
    private route: Router
  ) { }

  ngOnInit() {
    this.getEnabledUsers();
    this.getAllPhotos();
  }
  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      //imge preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);

    }
  }
  allPhotos: any = [];
  getAllPhotos() {
    this.photoService.getAllPhotos().subscribe(
      res => {
        this.allPhotos = res,
          console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }
  //************************************************************ */

  addNewPhoto(imgForm, title: HTMLInputElement, description: HTMLInputElement, id_user: HTMLOptionElement) {

    this.photoService.newPhoto(title.value, description.value, this.file, id_user.value).subscribe(
      res => {
        console.log(res),
          this.getAllPhotos(),
          imgForm.reset(),
          imgForm.nativeElement.reset()

      },
      err => {
        console.log(err)
      }
    )



    return false;
  }


  //******************************* */
  enableUsers: any = [];
  getEnabledUsers() {
    this.userService.getEnableUsers().subscribe(
      res => {
        this.enableUsers = res,
          console.log(this.enableUsers)
      }, err => {
        console.log(err)
      }
    )

  }

  
}
