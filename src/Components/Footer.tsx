import { Link } from 'react-router-dom';
import styles from './footer.module.css';

//Assets
import PokemonPic from '../assets/pikachu.png';
import LocationPic from '../assets/pointer.png';
import ItemsPic from '../assets/pokeball.png';



const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link to="/pokemons" className={styles.footerLink}>
                <img src={PokemonPic} alt="Pokeball" className={styles.footerIcon}/>
                Pokemons
            </Link>
            <Link to="/items" className={styles.footerLink}>
                <img src={ItemsPic} alt="Items" className={styles.footerIcon}/>
                Items
            </Link>
            <Link to="/location" className={styles.footerLink}>
                <img src={LocationPic} alt="Map" className={styles.footerIcon}/>
                Map
            </Link>
        </footer>
    )
};

export default Footer;