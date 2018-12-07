import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  url: string = 'http://localhost:3000/';
  constructor(private http: HttpClient, private auth: AuthService) { }

  login(email: string, password: string) {
    console.log(email, password);
    return this.http.post(`${this.url}users/login`, {
      email: email,
      password: password
    }, { observe: 'response' });
  }

  register(email: string, password: string) {
    console.log(email, password);
    return this.http.post(`${this.url}users/register`, {
      user: {
        email: email,
        password: password
      }
    }, { observe: 'response' });
  }

  getProfileData(id) {
    return this.http.get(`${this.url}users/${id}`, { observe: 'response' });
  }

  updateProfile(email: string, firstName: string, lastName: string, description: string) {
    return this.http.put(`${this.url}users/${this.auth.getId()}`,
      {
        email: email,
        firstName: firstName,
        lastName: lastName,
        description: description
      }
      , { observe: 'response' });
  }
  updatePassword(id, oldPassword, newPassword, repeatedPassword) {
    return this.http.put(`${this.url}users/changePassword/${id}`, {

      oldPassword: oldPassword,
      newPassword: newPassword,
      repeatedPassword: repeatedPassword

    }, { observe: 'response' });
  }
  getAllCourses() {
    return this.http.get(`${this.url}courses`, { observe: 'body' });
  }
}
