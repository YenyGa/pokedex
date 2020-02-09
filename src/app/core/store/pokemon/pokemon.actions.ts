import { Action } from '@ngrx/store';
import {PokemonModel} from '../../models/pokemon.model';

export enum PokemonActionTypes {
  LoadPokemonList = '[Pokemon] Load Pokemon List',
  PokemonListLoaded = '[Pokemon Effect] Pokemon List Loaded',
  ErrorEncountered = '[Pokemon Effect] Error Encountered'
}

export class LoadPokemonList implements Action {
  readonly type = PokemonActionTypes.LoadPokemonList;
}

export class PokemonListLoaded implements Action {
  readonly type = PokemonActionTypes.PokemonListLoaded;

  constructor(public payload: {pokemonList: PokemonModel[]}) {}
}

export class ErrorEncountered implements Action {
  readonly type = PokemonActionTypes.ErrorEncountered;

  constructor(public payload: { error: any }) {}
}

export type PokemonActions = LoadPokemonList
  | PokemonListLoaded
  | ErrorEncountered;
