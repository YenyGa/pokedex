import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PokemonListComponent} from './components/sections/main/pokemon-list/pokemon-list.component';
import {PokemonDetailsComponent} from './components/sections/main/pokemon-details/pokemon-details.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent
  },
  {
    path: 'details/:id',
    component: PokemonDetailsComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
