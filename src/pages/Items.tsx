import Nav from '../components/Nav';
import styles from './items.module.css'
import comingSoon from '../assets/comingSoon.gif';

const Items = () => {
    return (
        <body>
            <Nav />
            <div className={styles.div}>
                <img className={styles.gif} src={comingSoon} alt="Coming Soon" />
            </div>
        </body>
    
    )
};

export default Items;