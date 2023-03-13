import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import BulbasaurPic from '../assets/bulbasaur.gif';
import styles from './pokemons.module.css';

const Pokemons = () => {
    const [query, setQuery] = useState("");
    return <>
    <Header query={query} setQuery={setQuery}/>
    <main>
        <nav>
            <Link className={styles.listItem} to="/">
                <img className={styles.listItemIcon} src={BulbasaurPic} alt="Bulbasaur" />
                <div className={styles.listItemText}>
                    <span>Bulbasaur</span>
                    <span>001</span>
                </div>
            </Link>
            <Link className={styles.listItem} to="/">
                <img className={styles.listItemIcon} src={BulbasaurPic} alt="Bulbasaur" />
                <div className={styles.listItemText}>
                    <span>Ivysaur</span>
                    <span>002</span>
                </div>
            </Link>
            <Link className={styles.listItem} to="/">
                <img className={styles.listItemIcon} src={BulbasaurPic} alt="Bulbasaur" />
                <div className={styles.listItemText}>
                    <span>Venusaur</span>
                    <span>003</span>
                </div>
            </Link>
        </nav>
    </main>
    <Footer/>
    </>
};

export default Pokemons;