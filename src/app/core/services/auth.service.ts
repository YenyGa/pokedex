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

  logIn(user: UserModel): Observable<any> {
    const users: UserModel[] = JSON.parse(localStorage.getItem('users'));
    if (users.includes(user)) {
      return of({status: '200 OK'});
    }
    return throwError({status: '401 Unauthorized'});
  }
}
