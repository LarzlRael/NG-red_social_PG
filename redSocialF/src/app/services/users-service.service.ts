import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  URI = 'http://localhost:3000/users'
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.URI);
  }
  getEnableUsers() {
    return this.http.get(`${this.URI}/enabled`)
  }

  enableUser(id) {
    console.log('el id recibido es :', id)
    return this.http.get(`${this.URI}/enable/${id}`)
  }
  disableUser(id) {
    
    return this.http.get(`${this.URI}/disable/${id}`)
  }
}
