import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {forkJoin, Observable} from 'rxjs';
import {PokemonModel} from '../models/pokemon.model';
import {map, switchMap} from 'rxjs/operators';
import {PokemonFactory} from '../factories/pokemon.factory';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  listPokemons(): Observable<PokemonModel[]> {
    return this.http.get<any>(`${environment.apiConstants.POKE_API_URL}pokemon/?offset=0&limit=964"`)
      .pipe(
        switchMap(response => {
          const pokemonNames: string[] = response.results.map(result => result.name);
          return this.getPokemonListInfo(pokemonNames).pipe(
            map(pokemonList => {
              return pokemonList;
            })
          );
        })
      );
  }

  private getPokemonListInfo(pokemonNames: string[]): Observable<PokemonModel[]> {
    const observableList: Observable<PokemonModel>[] = [];
    pokemonNames.forEach((pokemonName: string) => {
      observableList.push(this.getPokemonInfo(pokemonName));
    });
    return forkJoin(observableList);
  }

  private getPokemonInfo(name: string): Observable<PokemonModel> {
    return this.http.get(
      `${environment.apiConstants.POKE_API_URL}pokemon/${name}`
    ).pipe(
      map(pokemonResponse => {
        return PokemonFactory.toModel(pokemonResponse);
      })
    );
  }
}
