import {Component, Input, OnInit} from '@angular/core';
import {PokemonModel} from '../../../../../core/models/pokemon.model';
import {POKEMON_TYPES} from '../../../../../utils/constants/pokemon-types.contants';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: PokemonModel;

  constructor() { }

  ngOnInit(): void {
  }

  getBadgeColor(type: string) {
    switch (type) {
      case 'normal':
        return POKEMON_TYPES.NORMAL;
      case 'fire':
        return POKEMON_TYPES.FIRE;
      case 'water':
        return POKEMON_TYPES.WATER;
      case 'grass':
        return POKEMON_TYPES.GRASS;
      case 'electric':
        return POKEMON_TYPES.ELECTRIC;
      case 'ice':
        return POKEMON_TYPES.ICE;
      case 'fighting':
        return POKEMON_TYPES.FIGHTING;
      case 'poison':
        return POKEMON_TYPES.POISON;
      case 'ground':
        return POKEMON_TYPES.GROUND;
      case 'flying':
        return POKEMON_TYPES.FLYING;
      case 'psychic':
        return POKEMON_TYPES.PSYCHIC;
      case 'bug':
        return POKEMON_TYPES.BUG;
      case 'rock':
        return POKEMON_TYPES.ROCK;
      case 'ghost':
        return POKEMON_TYPES.GHOST;
      case 'dark':
        return POKEMON_TYPES.DARK;
      case 'dragon':
        return POKEMON_TYPES.DRAGON;
      case 'steel':
        return POKEMON_TYPES.STEEL;
      case 'fairy':
        return POKEMON_TYPES.FAIRY;
      default:
          return 'black';
    }
  }

}
