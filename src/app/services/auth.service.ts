import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(): string {
    return localStorage.getItem('token') ? localStorage.getItem('token') : '';
  }

  setToken(token: string) {
    localStorage.setItem('token', token.split(' ')[1]);
  }

  getId(): string {
    return localStorage.getItem('id') ? localStorage.getItem('id') : '';
  }

  setId(id: string) {
    localStorage.setItem('id', id);
  }

  isAuthenticated() {

    return this.getToken() ? true : false;
  }

  logout() {
    localStorage.removeItem('token');
  }

}
