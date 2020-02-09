import {ActionReducerMap} from '@ngrx/store';
import {pokemonReducer, PokemonState} from './pokemon/pokemon.reducer';
import {authReducer, AuthState} from './auth/auth.reducer';

export interface State {
  pokemon: PokemonState;
  auth: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  pokemon: pokemonReducer,
  auth: authReducer
};
