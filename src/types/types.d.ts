export type Pokemon = {
    name: string;
    id: string;
    imgSrc: string;
};

export type PokemonDetails = {
  name: string;
  id: string;
  imgSrc: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  height: number;
  weight: number;
  types: any;
  type: string;
  typeSec: string;
}

export type PokemonText = {
  flavor_text: string;
}