//https://unpkg.com/pokemons@1.1.0/pokemons.json

import { formatName } from "../utils/Utils";

export async function fetchPokemons() {
    const response = await fetch(
        "https://unpkg.com/pokemons@1.1.0/pokemons.json"
    );

    if(!response.ok) {
        throw new Error("Failed to fetch pokemons")
    }
    const results = await response.json();

    const pokemons = results.results.map((pokemon: any) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(pokemon.name.toLowerCase())}.gif`,
        total: pokemon.total,
        types: pokemon.type[1] ? `${pokemon.type[0]} & ${pokemon.type[1]}` : pokemon.type[0],
        type: pokemon.type[0],
        typeSec: pokemon.type[1]? pokemon.type[1] : '',
    }))

    const uniquePokemons = pokemons.filter(
        (pokemon: any, index: number) =>
          pokemons.findIndex((other: any) => other.id === pokemon.id) === index
      );
      return uniquePokemons;
}