import {AuthActions, AuthActionTypes} from './auth.actions';
import {UserModel} from '../../models/user.model';

export interface AuthState {
  user?: UserModel;
}

export const initialState: AuthState = {};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LogedIn: {
      return {
        user: action.payload.user
      };
    }
    default:
      return state;
  }
}
