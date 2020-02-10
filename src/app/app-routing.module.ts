import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PokemonListComponent} from './components/sections/main/pokemon-list/pokemon-list.component';
import {PokemonDetailsComponent} from './components/sections/main/pokemon-details/pokemon-details.component';
import {PokemonListResolver} from './utils/resolvers/pokemon-list.resolver';
import {SignUpComponent} from './components/sections/auth/sing-up/sign-up.component';
import {LogInComponent} from './components/sections/auth/log-in/log-in.component';
import {AuthGuardService} from './core/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'list',
    component: PokemonListComponent,
    resolve: { pokemonList: PokemonListResolver },
    canActivate: [AuthGuardService]
  },
  {
    path: 'details/:id',
    component: PokemonDetailsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '',
    component: LogInComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  providers: [
    PokemonListResolver
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
