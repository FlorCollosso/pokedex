import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { Pokemon } from "../types/types.d";
import styles from './pokemons.module.css';
import { fetchPokemons } from '../api/fetchPokemons';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/Utils';


const Pokemons = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchAllPokemons = async () => {
          setIsLoading(true);
          await waitFor(1000);
          const allPokemons = await fetchPokemons();
          setPokemons(allPokemons);
          setIsLoading(false);
        };
        fetchAllPokemons();
      }, []);

    if (isLoading || !pokemons) {
        return <LoadingScreen />;
    }

    const filteredPokemons = pokemons.slice(0, 150).filter((pokemon) => {
        return pokemon.name.toLowerCase().match(query.toLowerCase())
    })

    return <>
    <Header query={query} setQuery={setQuery}/>
    <main>
        <nav className={styles.nav}>
            {filteredPokemons?.slice(0, 151).map((pokemon) =>(
            <Link
            key={pokemon.id}
            className={styles.listItem}
            to={`/pokemons/${pokemon.name.toLowerCase()}`}
            >
                <img
                    className={styles.listItemIcon}
                    src={pokemon.imgSrc}
                    alt={pokemon.name}
                />
                <div className={styles.listItemText}>
                    <span>{pokemon.name}</span>
                    <span>{pokemon.id}</span>
                </div>
            </Link>
            ))}
        </nav>
    </main>
    <Footer/>
    </>
};

export default Pokemons;