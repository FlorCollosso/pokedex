import styles from './header.module.css';

type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
};

const Header = ({query, setQuery}: HeaderProps) => {
    return <header className={styles.header}>
        <input 
        placeholder="Search a Pokemon" 
        type="text" 
        className={styles.input}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        />
    </header>
};

export default Header;