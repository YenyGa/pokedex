import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoadPokemonList, PokemonActionTypes, PokemonListLoaded} from '../../../../core/store/pokemon/pokemon.actions';
import {Actions, ofType} from '@ngrx/effects';
import {take} from 'rxjs/operators';
import {State} from '../../../../core/store';
import {PokemonModel} from '../../../../core/models/pokemon.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList: PokemonModel[];
  filteredList: PokemonModel[];
  searchControl: FormControl;

  constructor(private store: Store<State>,
              private actions$: Actions) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges.subscribe(value => {
      this.filteredList = this.filterList(value);
    });
    this.actions$.pipe(
      ofType<PokemonListLoaded>(PokemonActionTypes.PokemonListLoaded),
      take(1)
    ).subscribe(({payload}) => {
      this.pokemonList = payload.pokemonList;
      this.filteredList = payload.pokemonList;
    });
    this.store.dispatch(new LoadPokemonList());
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
