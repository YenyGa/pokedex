import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AuthActionTypes, ErrorEncountered, LogedIn, LogIn, SignedUp, SignUp} from './auth.actions';
import {of} from 'rxjs';
import {AuthService} from '../../services/auth.service';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private authService: AuthService) {}

  @Effect()
  signUp$ = this.actions$.pipe(
    ofType<SignUp>(AuthActionTypes.SignUp),
    switchMap(({payload}) => this.authService.signUp(payload.user)
      .pipe(
        map(() => {
          return new SignedUp();
        }),
        catchError(error => {
          return of(new ErrorEncountered({error}));
        })
      )),
    catchError(error => {
      return of(new ErrorEncountered({error}));
    })
  );

  @Effect()
  logIn$ = this.actions$.pipe(
    ofType<LogIn>(AuthActionTypes.LogIn),
    switchMap(({payload}) => this.authService.logIn(payload.user)
      .pipe(
        map(user => {
          return new LogedIn({user});
        }),
        catchError(error => {
          return of(new ErrorEncountered({error}));
        })
      )),
    catchError(error => {
      return of(new ErrorEncountered({error}));
    })
  );

}
