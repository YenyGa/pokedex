import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-list/pokemon-card/pokemon-card.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [PokemonListComponent, PokemonCardComponent, PokemonDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class MainModule { }
