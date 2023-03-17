import { useNavigate, useParams } from "react-router-dom";
import pokeballSrc from "../assets/pokeball.png";
import Footer from "../components/Footer";
import styles from "./pokemon.module.css";

import { useEffect, useState } from "react";
import { fetchPokemon } from "../api/fetchPokemon";
import { fetchTextPokemon } from "../api/fetchTextPokemon";
import LoadingScreen from "../components/LoadingScreen";
import { PokemonDetails, PokemonText } from "../types/types";
import { formatText, formatTitle, waitFor } from "../utils/Utils";

const Pokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const [pokemonText, setPokemonText] = useState<PokemonText>();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true);
      waitFor(1000);
      const fetchedPokemon = await fetchPokemon(parseInt(id?? '', 10).toString() as string);
      const fetchedTextPokemon = await fetchTextPokemon(parseInt(id?? '', 10).toString() as string);
      setPokemon(fetchedPokemon);
      setPokemonText(fetchedTextPokemon);
      setIsLoading(false);
    }
    getPokemon();
  }, [id]);

  if (isLoading || !pokemon) {
    return <LoadingScreen />;
  }

  return (
    <>
      <section className={styles.section}>
        <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
          <img className={styles.pokeballImg} src={pokeballSrc} alt="pokeball" />
          Go back
        </button>
        <main className={styles.pokemon}>
          <div className={styles.pokemonInfo}>
            <div className={styles.containerImg}>
              <img
                className={styles.pokemonInfoImg}
                src={pokemon?.imgSrc}
                alt={pokemon?.name}
              />
            </div>
            <div className={styles.containerInfo}>
              <div className={styles.containerDivInfo}>
              <div className={styles.pokeNumber}>Nr. {pokemon?.id}</div>
                <div className={styles.pokemonTitle}>{formatTitle(pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1))}</div>
                <div className={styles.containerStats}>
                <div>Type: {pokemon?.types}</div>
                  <div>
                    <span className={styles.statHp}>
                      {pokemon?.hp} HP
                    </span>
                  </div>
                  <div>
                    <span className={styles.statAttack}>
                      Attack: {pokemon?.attack}
                    </span>
                  </div>
                  <div>
                    <span className={styles.statDefense}>
                      Defense: {pokemon?.defense}
                    </span>
                  </div>
                  <div>
                    <span>
                      Text: {formatText(pokemonText?.flavor_text)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Pokemon;