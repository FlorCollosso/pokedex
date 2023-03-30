import Nav from '../components/Nav';
import styles from './items.module.css'

const Items = () => {
    return (
        <body>
            <Nav />
            <div className={styles.div}>
                <span className={styles.span}>Coming soon</span>
            </div>
        </body>
    
    )
};

export default Items;