import { Component, OnInit } from '@angular/core';
import {PokeApiService} from '../../../../core/services/poke-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.listPokemons().subscribe(result => console.log(result));
  }

}
