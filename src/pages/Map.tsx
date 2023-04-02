import Nav from '../components/Nav';
import styles from './map.module.css'
import comingSoon from '../assets/comingSoon.gif';

const Map = () => {
    return (
        <body>
            <Nav />
            <div className={styles.div}>
                <img className={styles.gif} src={comingSoon} alt="Coming Soon" />
            </div>
        </body>
    
    )
};

export default Map;