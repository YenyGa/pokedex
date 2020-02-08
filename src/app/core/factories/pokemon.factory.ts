import {PokemonModel} from '../models/pokemon.model';

export class PokemonFactory {
  static toModel(dto: any): PokemonModel {
    return {
      id: dto.id,
      name: dto.name,
      imageUrl: dto.sprites.front_default,
      types: dto.types.map(item => item.type.name),
      height: dto.height,
      weight: dto.weight,
      moves: dto.moves.map(item => item.move.name)
    };
  }

  static toDTO() {
    throw Error('not implemented yet');
  }
}
