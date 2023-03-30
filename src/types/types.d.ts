export type Pokemon = {
    name: string;
    id: string;
    imgSrc: string;
    total: number;
    type: string;
    typeSec: string;
    types: any;
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
  special_attack: number;
  special_defense: number;
}

export type PokemonText = {
  flavor_text: string;
}