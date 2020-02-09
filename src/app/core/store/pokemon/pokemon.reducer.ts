import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {PokemonModel} from '../../models/pokemon.model';
import {PokemonActions, PokemonActionTypes} from './pokemon.actions';

export interface PokemonState extends EntityState<PokemonModel> {
}

export const adapter: EntityAdapter<PokemonModel> =
  createEntityAdapter<PokemonModel>({sortComparer: (a, b) => Number(b.id) - Number(a.id)});

export const initialState: PokemonState = adapter.getInitialState();

export function pokemonReducer(state = initialState, action: PokemonActions): PokemonState {
  switch (action.type) {
    case PokemonActionTypes.PokemonListLoaded: {
      return adapter.upsertMany(action.payload.pokemonList, state);
    }
    default:
      return state;
  }
}

const {
  selectAll,
  selectEntities
} = adapter.getSelectors();

export const selectAllPokemons = selectAll;
export const selectPokemonEntities = selectEntities;
