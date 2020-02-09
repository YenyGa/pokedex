import {PokemonState, selectAllPokemons, selectPokemonEntities} from './pokemon.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectPokemonState = createFeatureSelector<PokemonState>('pokemon');

export const selectPokemons = createSelector(
  selectPokemonState,
  selectAllPokemons
);

export const selectAllPokemonEntities = createSelector(
  selectPokemonState,
  selectPokemonEntities
);

export const selectPokemonById = createSelector(
  selectAllPokemonEntities,
  (entities, id) => entities[id]
);
