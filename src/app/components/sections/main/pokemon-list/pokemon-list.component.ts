import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Actions, ofType} from '@ngrx/effects';
import {State} from '../../../../core/store';
import {PokemonModel} from '../../../../core/models/pokemon.model';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {take} from 'rxjs/operators';
import {PokemonActionTypes, PokemonListLoaded} from '../../../../core/store/pokemon/pokemon.actions';
import {selectPokemons} from '../../../../core/store/pokemon/pokemon.selector';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList: PokemonModel[];
  searchControl: FormControl;
  p = 1;

  constructor(private store: Store<State>,
              private actions$: Actions,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemonList = this.route.snapshot.data.pokemonList;
    this.actions$.pipe(
      ofType<PokemonListLoaded>(PokemonActionTypes.PokemonListLoaded),
      take(1)
    ).subscribe(({payload}) => {
      this.pokemonList = payload.pokemonList;
    });
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges.subscribe(value => {
      if (!value) {
        this.store
          .pipe(
            select(selectPokemons),
            take(1)
          ).subscribe(list => {
            this.pokemonList = list;
        });
      } else {
        this.pokemonList = this.filterList(value);
      }
    });
  }

  private filterList(searchKey: string): PokemonModel[] {
    const filteredList: PokemonModel[] = [];
    this.pokemonList.forEach(pokemon => {
      if (pokemon.name.search(searchKey) >= 0 || this.doesTypeMatches(pokemon.types, searchKey)) {
        filteredList.push(pokemon);
      }
    });
    return filteredList;
  }

  private doesTypeMatches(types: string[], searchKey): boolean {
    let result = false;
    types.forEach(type => {
      result = result || type.search(searchKey) >= 0;
    });
    return result;
  }

}
