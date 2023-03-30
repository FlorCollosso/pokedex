import { Link } from 'react-router-dom';
import styles from './nav.module.css';
import { useNavigate } from "react-router-dom";

import Pikachu from '../assets/pikachu.png';
import Pointer from '../assets/pointer.png';
import Pokeball from '../assets/pokeball.png';
import random from "../assets/random.png";

//Assets

import pokeballSrc from "../assets/pokeball.png";
import { fetchRandom } from '../api/fetchRandom';

const Nav = () => {

    const navigate = useNavigate();

    // Function to fetch a random pokemon
    const fetchRandomPokemon = async () => {
        // Fetch the details of the random Pokemon
        const pokemon = await fetchRandom();
        // Do something with the Pokemon data, e.g. navigate to its page
        navigate(`/pokemons/${pokemon.id}`);
    };


    return (
        <nav role="navigation" className={styles.nav}>
            <button className={styles.pokeballButton} onClick={() => navigate('/pokemons')}>
              <img className={styles.pokeballImg} src={pokeballSrc} alt="pokeball" />
              <span>Go back</span> 
            </button>

            <button className={styles.random} onClick={fetchRandomPokemon}>
                <img src={random} alt="Random" />
            </button>

            <div className={styles.menuToggle}>
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul className={styles.menu}>
                <Link to="/items" className={styles.navLink}>
                    <img className={styles.iconMenu} src={Pokeball} alt="Pokeball" />
                    Items
                </Link>
                <Link to="/pokemons" className={styles.navLink}>
                    <img className={styles.iconMenu} src={Pikachu} alt="Pickachu" />
                    Pokemons
                </Link>
                <Link to="/location" className={styles.navLink}>
                    <img className={styles.iconMenu} src={Pointer} alt="Pointer" />
                    Map
                </Link>
                </ul>
            </div>
      </nav>
    )
};

export default Nav;