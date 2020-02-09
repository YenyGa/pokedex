import {Action} from '@ngrx/store';
import {UserModel} from '../../models/user.model';

export enum AuthActionTypes {
  SignUp = '[Pokemon] Sign up',
  SignedUp = '[Pokemon Effect] Signed Up',
  LogIn = '[Pokemon] LogIn',
  LogedIn = '[Pokemon Effect] LogedIn',
  ErrorEncountered = '[Pokemon Effect] Error Encountered'
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SignUp;

  constructor(public payload: {user: UserModel}) {}
}

export class SignedUp implements Action {
  readonly type = AuthActionTypes.SignedUp;
}

export class LogIn implements Action {
  readonly type = AuthActionTypes.LogIn;

  constructor(public payload: {user: UserModel}) {}
}

export class LogedIn implements Action {
  readonly type = AuthActionTypes.LogedIn;

  constructor(public payload: {user: UserModel}) {}
}

export class ErrorEncountered implements Action {
  readonly type = AuthActionTypes.ErrorEncountered;

  constructor(public payload: { error: any }) {}
}

export type AuthActions = SignUp
  | SignedUp
  | LogIn
  | LogedIn
  | ErrorEncountered;
