import Header from '../components/Header';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { Pokemon } from "../types/types.d";
import styles from './pokemons.module.css';
import { fetchPokemons } from '../api/fetchPokemons';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/Utils';

import bug from "../assets/bug.png";
import dark from "../assets/dark.png";
import dragon from "../assets/dragon.png";
import electric from "../assets/electric.png";
import fairy from "../assets/fairy.png";
import fighting from "../assets/fighting.png";
import fire from "../assets/fire.png";
import flying from "../assets/flying.png";
import ghost from "../assets/ghost.png";
import grass from "../assets/grass.png";
import ground from "../assets/ground.png";
import ice from "../assets/ice.png";
import normal from "../assets/normal.png";
import poison from "../assets/poison.png";
import psychic from "../assets/psychic.png";
import rock from "../assets/rock.png";
import steel from "../assets/steel.png";
import water from "../assets/water.png";

interface TypeImages {
    [type: string]: string;
}
  
const typeImages: TypeImages = {
    Water: water,
    Fire: fire,
    Grass: grass,
    Electric: electric,
    Bug: bug,
    Flying: flying,
    Poison: poison,
    Psychic: psychic,
    Rock: rock,
    Ground: ground,
    Ice: ice,
    Ghost: ghost,
    Dragon: dragon,
    Dark: dark,
    Steel: steel,
    Fairy: fairy,
    Fighting: fighting,
    Normal: normal,
};

const Pokemons = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [type, setType] = useState("");
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchAllPokemons = async () => {
          setIsLoading(true);
          await waitFor(2000);
          const allPokemons = await fetchPokemons();
          setPokemons(allPokemons);
          setIsLoading(false);
        };
        fetchAllPokemons();
      }, []);

    if (isLoading || !pokemons) {
        return <LoadingScreen />;
    }   

    const filteredPokemons = pokemons.slice(0, 403).filter((pokemon) => {
        if (query) {
            return pokemon.name.toLowerCase().match(query.toLowerCase()) && pokemon.type.toLowerCase().match(type.toLowerCase());
        }
        return pokemon.type.toLowerCase().match(type.toLowerCase());
    });

    return <>
    <Header query={query} setQuery={setQuery} type={type} setType={setType}/>
    <main>
        <nav className={styles.nav}>
            {filteredPokemons?.slice(0, 403).map((pokemon) =>(
            <Link 
            key={pokemon.id}
            className={styles.listItem}
            to={`/pokemons/${pokemon.id}`}
            >
                <div className={styles.containerImg}>
                    <img
                        className={styles.imgPokemon}
                        src={pokemon.imgSrc}
                        alt={pokemon.name}
                    />
                    <span>{pokemon.id}</span>
                </div>

                <div className={styles.listItemText}>
                    <span>{pokemon.name}</span>
                    <span>Total: {pokemon.total}</span>
                    <div className={styles.pokemonTypes}>
                        <span>Types: {pokemon.types}</span>
                        <div>
                        <img
                            className={styles.listItemIcon}
                            src={typeImages[pokemon.type]}
                            alt={pokemon.type}
                        />
                        {typeImages[pokemon.typeSec] && 
                        <img 
                        className={styles.listItemIcon} 
                        src={typeImages[pokemon.typeSec]} 
                        alt={pokemon.typeSec} 
                        />}
                        </div>
                    </div>
                </div>
            </Link>
            ))}
        </nav>
    </main>
    </>
};

export default Pokemons;