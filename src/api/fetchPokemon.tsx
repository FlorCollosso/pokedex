import { PokemonDetails } from "../types/types";

export async function fetchPokemon(
  pokemonId: string
): Promise<PokemonDetails> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result = await response.json();

  const pokemon = {
    name: result.name,
    id: result.id,
    imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${parseInt(result.id?? '', 10).toString()}.png`,
    hp: result.stats[0]?.base_stat,
    attack: result.stats[1]?.base_stat,
    defense: result.stats[2]?.base_stat,
    speed: result.stats[5]?.base_stat,
    height: result.height,
    weight: result.weight,
    types: result.types[1] ? `${result.types[0]?.type.name} & ${result.types[1]?.type.name}` : result.types[0]?.type.name
  };
  return pokemon;
}