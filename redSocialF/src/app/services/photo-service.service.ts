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
  getPhoto(id: string | number) {
    return this.http.get(`${this.URI}/${id}`);
  }

  //post methods
  newPhoto(title: string, description: string, photo: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo)
    return this.http.post(this.URI, fd);
  }
}
