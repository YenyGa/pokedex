import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, take, tap} from 'rxjs/operators';

import {State} from '../../core/store';
import {PokemonModel} from '../../core/models/pokemon.model';
import {selectPokemons} from '../../core/store/pokemon/pokemon.selector';
import {LoadPokemonList} from '../../core/store/pokemon/pokemon.actions';

@Injectable()
export class PokemonListResolver implements Resolve<PokemonModel[]> {
  constructor(private store: Store<State>) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<PokemonModel[]> {
    return this.store
      .pipe(
        select(selectPokemons),
        filter(pokemonList => pokemonList !== undefined),
        tap(pokemonList => {
          if (pokemonList.length === 0) {
            this.store.dispatch(new LoadPokemonList());
          }
          return pokemonList;
        }),
        take(1)
      );
  }
}
