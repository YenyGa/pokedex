import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectAuthUser} from '../store/auth/auth.selector';
import {map, take} from 'rxjs/operators';
import {CanActivate, Router} from '@angular/router';
import {State} from '../store';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private store: Store<State>) { }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(selectAuthUser),
      take(1),
      map(user => {
        if (!user) {
          this.router.navigateByUrl('');
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
