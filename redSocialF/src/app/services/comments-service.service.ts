import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsServiceService {

  URI = 'http://localhost:3000/comments';
  constructor(private http: HttpClient) { }


  newComment(id_user, id_img, content) {

    const newComment = {
      id_user,
      id_img,
      content
    }
    return this.http.post(this.URI + '/', newComment);

  }
  viewCommentsThisPhoto(id_img) {
    return this.http.get(`${this.URI}/${id_img}`);
  }

  lastedComments(){
    return this.http.get(this.URI+'/someComments')
    
  }


}




