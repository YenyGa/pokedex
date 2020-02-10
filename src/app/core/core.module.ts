import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {reducers} from './store';
import {StoreModule} from '@ngrx/store';
import {PokemonEffects} from './store/pokemon/pokemon.effects';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {AuthEffects} from './store/auth/auth.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      PokemonEffects,
      AuthEffects
    ]),
    CommonModule,
    HttpClientModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ]
})
export class CoreModule { }
