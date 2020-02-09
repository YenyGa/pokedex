import {Component, OnInit} from '@angular/core';
import {PokemonModel} from '../../../../core/models/pokemon.model';
import {ColorTypeHelper} from '../../../../utils/helpers/color-type.helper';
import {ActivatedRoute} from '@angular/router';
import {State} from '../../../../core/store';
import {select, Store} from '@ngrx/store';
import {filter, take} from 'rxjs/operators';
import {selectPokemonById} from '../../../../core/store/pokemon/pokemon.selector';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: PokemonModel;
  ColorTypeHelper = ColorTypeHelper;

  constructor(private route: ActivatedRoute,
              private store: Store<State>) { }

  ngOnInit(): void {
    this.store.pipe(
      select(selectPokemonById, this.route.snapshot.params.id),
      take(1),
      filter(info => info)
    ).subscribe(pokemon => this.pokemon = pokemon);
  }

}
