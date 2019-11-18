import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {
  URI = 'http://localhost:3000/photos';
  constructor(private http: HttpClient) {

  }

  getAllPhotos() {
    return this.http.get(this.URI);
  }
  getSomePhotos() {
    return this.http.get(this.URI+'/somePhotos');
  }
  getPhoto(id: string | number) {
    return this.http.get(`${this.URI}/${id}`);
  }

  //post methods
  newPhoto(title: string, description: string, photo: File,id_user) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo)
    fd.append('id_user', id_user)
    return this.http.post(this.URI, fd);
  }

  //delete methoos
  deletePhoto(id: number | string) {
    if (confirm('¿Esta seguro que quiere eliminar esta foto?')) {
      return this.http.delete(`${this.URI}/${id}`)
    }
  }

  IlikeThisPhoto(id: number | string) {
    return this.http.get(`${this.URI}/${id}/like`);
  }
  mostLikesphotos(){
    return this.http.get(this.URI+'/mostLikes')
  }
}
