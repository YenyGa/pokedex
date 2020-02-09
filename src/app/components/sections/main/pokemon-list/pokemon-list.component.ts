import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoadPokemonList, PokemonActionTypes, PokemonListLoaded} from '../../../../core/store/pokemon/pokemon.actions';
import {Actions, ofType} from '@ngrx/effects';
import {take} from 'rxjs/operators';
import {State} from '../../../../core/store';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(private store: Store<State>,
              private actions$: Actions) { }

  ngOnInit(): void {
    this.actions$.pipe(
      ofType<PokemonListLoaded>(PokemonActionTypes.PokemonListLoaded),
      take(1)
    ).subscribe(result => {
      console.log(result);
    });
    this.store.dispatch(new LoadPokemonList());
  }

}
