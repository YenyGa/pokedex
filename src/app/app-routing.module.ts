import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PokemonListComponent} from './components/sections/main/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent
  }
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
