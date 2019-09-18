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
}
