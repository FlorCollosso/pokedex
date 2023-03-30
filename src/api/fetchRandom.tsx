import { PokemonDetails } from "../types/types";

export async function fetchRandom(

): Promise<PokemonDetails> {

    const totalPokemon = 403;
    const randomIndex = Math.floor(Math.random() * totalPokemon) + 1;
    const randomId = randomIndex.toString();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
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
      special_attack: result.stats[3]?.base_stat,
      special_defense: result.stats[4]?.base_stat,
      speed: result.stats[5]?.base_stat,
      height: result.height/10,
      weight: result.weight/10,
      types: result.types[1] ? `${result.types[0]?.type.name} & ${result.types[1]?.type.name}` : result.types[0]?.type.name,
      type: result.types[0].type.name,
      typeSec: result.types[1]? result.types[1]?.type.name : '',
    };
    return pokemon;
}