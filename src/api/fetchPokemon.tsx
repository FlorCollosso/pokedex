import { PokemonDetails } from "../types/types";
import { formatName } from "../utils/Utils";

export async function fetchPokemon(
  pokemonName: string
): Promise<PokemonDetails> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${formatName(pokemonName)}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result = await response.json();

  const pokemon = {
    name: result.name,
    id: result.id,
    imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(result.name.toLowerCase())}.gif`,
    hp: result.stats[0]?.base_stat,
    attack: result.stats[1]?.base_stat,
    defense: result.stats[2]?.base_stat,
  };
  return pokemon;
}