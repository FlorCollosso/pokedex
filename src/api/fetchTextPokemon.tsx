import { PokemonText } from "../types/types";

export async function fetchTextPokemon(
    pokemonId:string
): Promise<PokemonText> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
    );

if (!response.ok) {
    throw new Error(response.statusText);
  }

  const result = await response.json();

  const pokemonText = {
    flavor_text: result.flavor_text_entries
    .find((entry: { language: { name: string } }) => entry.language.name === "en")
    ?.flavor_text,
  }
  return pokemonText;
}