import { useEffect, useState } from "react";
import { fetchPokemon } from "../api/fetchPokemon";
import { fetchTextPokemon } from "../api/fetchTextPokemon";
import { PokemonDetails, PokemonText } from "../types/types";
import { useNavigate, useParams } from "react-router-dom";
import { formatNum, formatText, formatTitle, waitFor } from "../utils/Utils";

import LoadingScreen from "../components/LoadingScreen";
import Nav from "../components/Nav";

import styles from "./pokemon.module.css";
import arrow from "../assets/arrow.png";
import pokeLogo from "../assets/pokeballLogo.png";

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

//Iterface for icons by type

interface TypeImages {
  [type: string]: string;
}

const typeImages: TypeImages = {
  water: water,
  fire: fire,
  grass: grass,
  electric: electric,
  bug: bug,
  flying: flying,
  poison: poison,
  psychic: psychic,
  rock: rock,
  ground: ground,
  ice: ice,
  ghost: ghost,
  dragon: dragon,
  dark: dark,
  steel: steel,
  fairy: fairy,
  fighting: fighting,
  normal: normal,
};

// Pokemon

const Pokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const [pokemonText, setPokemonText] = useState<PokemonText>();
  const [isLoading, setIsLoading] = useState(false);
  const [showArrowNext, setShowArrowNext] = useState(true);
  const [showArrowPrev, setShowArrowPrev] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true);
      await waitFor(1000);
      const fetchedPokemon = await fetchPokemon(parseInt(id?? '', 10).toString() as string);
      const fetchedTextPokemon = await fetchTextPokemon(parseInt(id?? '', 10).toString() as string);
      setPokemon(fetchedPokemon);
      setPokemonText(fetchedTextPokemon);
      setIsLoading(false);

      // Function to hide arrows 

      if (parseInt(fetchedPokemon.id) === 1) {
        setShowArrowPrev(false);
      } else if (parseInt(fetchedPokemon.id) === 649) {
        setShowArrowNext(false);
      } else {
        setShowArrowNext(true);
        setShowArrowPrev(true);
      }
    }
    getPokemon();
  }, [id]);


  if (isLoading || !pokemon) {
    return <LoadingScreen />;
  }

  // Function to fetch next pokemon

  const nextPokemon = async () => {
    navigate(`/pokemons/${parseInt(pokemon.id)+1}`);
  };

  // Function to fetch prev pokemon

  const prevPokemon = async () => {
    navigate(`/pokemons/${parseInt(pokemon.id)-1}`);
  };


  // Scroll event
  
  const doc = document;

  doc.addEventListener("wheel", function(event) {
    const currentUrl = window.location.href;
    
    if (currentUrl.includes(`/pokemons/`)) {
      if (event.deltaY > 0) {
        nextPokemon();
      } else if (event.deltaY < 0) {
        prevPokemon(); 
      }
    }
  });
  
  // Icons by type

  const typePrincipal = typeImages[pokemon.type];
  const typeSecondary = pokemon.typeSec ? typeImages[pokemon.typeSec] : '';


  // View

  return (
    <>
        <section className={`${styles.section} ${styles[pokemon.type]}`}>
          <Nav></Nav>
          <img className={styles.pokeLogo} src={pokeLogo} alt="Pokeball Logo" />
          <main className={styles.pokemon}>
            <div className={styles.pokemonInfo}>
              <div className={styles.containerInfo}>
                <div className={styles.containerDivInfo}>
                  <div className={`${styles.pokeNumber} ${'animate__animated animate__fadeInDown'}`}>#{formatNum(parseInt(pokemon?.id))}</div>
                  <div className={`${styles.pokemonTitle} ${'animate__animated animate__fadeInDown'}`}>{formatTitle(pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1))}</div>
                  <div className={styles.statsInfo}>
                    <div className={styles.containerStats}>
                      <div>
                        <div className={`${styles.divStatBar} ${'animate__animated animate__fadeInLeft animate__faster'}`}>
                          <progress className={styles.barStat} value={pokemon?.hp} max='160'></progress>
                          <span className={styles.stat}>
                          <strong>HP </strong>{pokemon?.hp}
                          </span>
                        </div>
                        <div className={`${styles.divStatBar} ${'animate__animated animate__fadeInLeft animate__fast'}`}>
                          <progress className={styles.barStat} value={pokemon?.attack} max='160'></progress>
                          <span className={styles.stat}>
                          <strong>Attack </strong>{pokemon?.attack}
                          </span>
                        </div>
                        <div className={`${styles.divStatBar} ${'animate__animated animate__fadeInLeft animate__slow'}`}>
                          <progress className={styles.barStat} value={pokemon?.defense} max='160'></progress>
                          <span className={styles.stat}>
                            <strong>Defense </strong>{pokemon?.defense}
                          </span>
                        </div>
                        <div className={`${styles.divStatBar} ${'animate__animated animate__fadeInLeft animate__slow'}`}>
                          <progress className={styles.barStat} value={pokemon?.special_attack} max='160'></progress>
                          <span className={styles.stat}>
                            <strong>Sp Att </strong>{pokemon?.special_attack}
                          </span>
                        </div>
                        <div className={`${styles.divStatBar} ${'animate__animated animate__fadeInLeft animate__slow'}`}>
                          <progress className={styles.barStat} value={pokemon?.special_defense} max='160'></progress>
                          <span className={styles.stat}>
                            <strong>Sp Def </strong>{pokemon?.special_defense}
                          </span>
                        </div>
                        <div className={`${styles.divStatBar} ${'animate__animated animate__fadeInLeft animate__slower'}`}>
                          <progress className={styles.barStat} value={pokemon?.speed} max='150'></progress>
                          <span className={styles.stat}>
                          <strong>Speed </strong>{pokemon?.speed}
                          </span>
                        </div>
                      </div>
                      <div className={`${styles.divStats} ${'animate__animated animate__fadeInUp'}`}>
                        <div className={styles.divStat}>
                          <div className={styles.spanTS}>{pokemon.weight}Kg</div>
                          <span className={styles.spanStat}>Weight</span>
                        </div>
                        <div className={styles.divStat}>
                          <div className={styles.spanTS}>
                            <img src={typePrincipal} alt={typePrincipal} />
                            {typeSecondary && <img src={typeSecondary} alt={typeSecondary} />}
                          </div>
                          <div className={styles.spanStat}>{pokemon?.types}</div>
                        </div>
                        <div className={styles.divStat}>
                          <div className={styles.spanTS}>{pokemon?.height}M</div>
                          <span className={styles.spanStat}>Height</span>
                        </div>
                      </div>
                      <div className={`${styles.divText} ${'animate__animated animate__fadeInUp'}`}>
                        <span className={styles.spanText}>
                            {formatText(pokemonText?.flavor_text, pokemon?.name)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.containerImg} ${'animate__animated animate__fadeInRight'}`}>
                <img
                  className={styles.pokemonInfoImg}
                  src={pokemon?.imgSrc}
                  alt={pokemon?.name}
                />
              </div>
            </div>
          </main>
          <div className={styles.divButtons} >
          {showArrowPrev && <button id="arrowPrev" className={styles.buttonPrev} onClick={prevPokemon}><img className={styles.arrow} src={arrow} alt="arrow" /></button>}
          {showArrowNext && <button id="arrowNext" className={styles.buttonNext} onClick={nextPokemon}><img className={styles.arrow} src={arrow} alt="arrow" /></button>}
          </div>
        </section>
    </>
  );
};

export default Pokemon;