import { Injectable } from '@angular/core';
import {UserModel} from '../models/user.model';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signUp(user: UserModel): Observable<any> {
    let users: UserModel[] = JSON.parse(localStorage.getItem('users'));
    if (!users) {
      users = [];
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return of({status: '201 Created'});
  }

  logIn(user: UserModel): Observable<UserModel> {
    const users: UserModel[] = JSON.parse(localStorage.getItem('users'));
    let userFound = false;
    users.forEach(savedUser => {
      if (savedUser.name === user.name && savedUser.email === user.email && savedUser.password === user.password) {
        userFound = userFound || true;
      }
    });
    if (userFound) {
      return of(user);
    } else {
      return of(undefined);
    }
  }
}
