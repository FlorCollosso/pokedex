import { Link } from 'react-router-dom';
import styles from './header.module.css';

import Pointer from '../assets/pointer.png';
import Pokeball from '../assets/pokeball.png';
import Search from '../assets/search.png';

type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
};

const Header = ({query, setQuery}: HeaderProps) => {
    return <header className={styles.header}>
        <div className={styles.containerInput}>
            <img src={Search} alt="Search" className={styles.searchIcon}/>
            <input 
            placeholder="Search a Pokemon" 
            type="text" 
            className={styles.input}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            />
        </div>

        <menu className={styles.containerMenu}>
            <Link to="/location" className={styles.menuLink}>
                <img className={styles.iconMenu} src={Pointer} alt="Pickachu" />
            </Link>
            <Link to="/items" className={styles.menuLink}>
                <img className={styles.iconMenu} src={Pokeball} alt="Pickachu" />
            </Link>
        </menu>
    </header>
};

export default Header;