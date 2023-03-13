import { useNavigate, useParams } from "react-router-dom";
import pokeballSrc from "../assets/pokeball.png";
import Footer from "../components/Footer";
import styles from "./pokemon.module.css";

import { useEffect, useState } from "react";
import { fetchPokemon } from "../api/fetchPokemon";
import LoadingScreen from "../components/LoadingScreen";
import { PokemonDetails } from "../types/types";
import { waitFor } from "../utils/Utils";

const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true);
      waitFor(1000);
      const fetchedPokemon = await fetchPokemon(name as string);
      setPokemon(fetchedPokemon);
      setIsLoading(false);
    }
    getPokemon();
  }, [name]);

  if (isLoading || !pokemon) {
    return <LoadingScreen />;
  }

  return (
    <>
      <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
        <img className={styles.pokeballImg} src={pokeballSrc} alt="pokeball" />
        Go back
      </button>
      <div className={styles.pokemon}>
        <main className={styles.pokemonInfo}>
          <div className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
          <div>Nr. {pokemon?.id}</div>
          <div>
            <img
              className={styles.pokemonInfoImg}
              src={pokemon?.imgSrc}
              alt={pokemon?.name}
            />
          </div>
          <div>HP: {pokemon?.hp}</div>
          <div>Attack: {pokemon?.attack}</div>
          <div>Defense: {pokemon?.defense}</div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Pokemon;