import {Component, Input, OnInit} from '@angular/core';
import {PokemonModel} from '../../../../../core/models/pokemon.model';
import {ColorTypeHelper} from '../../../../../utils/helpers/color-type.helper';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: PokemonModel;
  ColorTypeHelper = ColorTypeHelper;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToDetails() {
    this.router.navigateByUrl(`/details/${this.pokemon.id}`);
  }

}
