import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ErrorEncountered, LoadPokemonList, PokemonActionTypes, PokemonListLoaded} from './pokemon.actions';
import {PokeApiService} from '../../services/poke-api.service';
import {PokemonModel} from '../../models/pokemon.model';
import {of} from 'rxjs';

@Injectable()
export class PokemonEffects {

  constructor(private actions$: Actions,
              private pokeApiService: PokeApiService) {}

  @Effect()
  loadPokemonList$ = this.actions$.pipe(
    ofType<LoadPokemonList>(PokemonActionTypes.LoadPokemonList),
    switchMap(() => this.pokeApiService.listPokemons()
      .pipe(
        map((response: PokemonModel[]) => {
          return new PokemonListLoaded({pokemonList: response});
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
