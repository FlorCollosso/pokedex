import { useState } from 'react';
import Nav from '../components/Nav';
import styles from './items.module.css'


const Items = () => {

    const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

    const handleClick = (event: { clientX: any; clientY: any; }) => {
        const newHeart = {
            id: Date.now(),
            x: event.clientX,
            y: event.clientY,
        };
        setHearts([...hearts, newHeart]);
        setTimeout(() => {
            setHearts((hearts) => hearts.filter((heart) => heart.id !== newHeart.id));
        }, 1000);
    };

    return (
        <body>
            <Nav showRandomButton={false} />
            <div className={styles.div}>
                <div className={styles.modalContent}>
                <span className={styles.modalIcon}>⚠️</span>
                    <h2 className={styles.modalTitle}>Under Construction</h2>
                    <p className={styles.modalText}>This section is under development. More features and content will be added soon.</p>
                    <button onClick={handleClick} className={styles.modalButton}>
                        Click to send love!
                    </button>
                </div>

                {hearts.map((heart) => (
                    <span
                        key={heart.id}
                        className={styles.heart}
                        style={{
                            left: heart.x,
                            top: heart.y,
                        }}
                    >
                        ❤️
                    </span>
                ))}
            </div>
        </body>

    )
};

export default Items;