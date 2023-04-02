import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { useState } from 'react';

import Pointer from '../assets/pointer.png';
import Pokeball from '../assets/pokeball.png';
import Search from '../assets/search.png';
import Filter from '../assets/filter.svg';

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


type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
    type: string;
    setType: (type: string) => void;
};

const Header = ({query, setQuery, type, setType}: HeaderProps) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(true);
    };

    const handleReset = () => {
        setActive(false);
    }

    const filterReset = () => {
        setType("");
    }
  
    const scaleStyle = {
        transform: active ? `translate(0, 20vw)` : `translate(0, 0)`
    };

    const backFilterStyle = {
        transform: active ? `scale(1)` : `scale(0)`
    }

    return <header className={styles.header}>
                <div className={styles.backgroundFilter} style={backFilterStyle} onClick={handleReset}></div>
                <div className={styles.containerInput}>
                    <img src={Search} alt="Search" className={styles.searchIcon}/>
                    <input 
                    placeholder="Search a Pokemon" 
                    type="text" 
                    className={styles.input}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    />
                    <button className={styles.filterButton} onClick={handleClick}>
                        <img className={styles.filter} 
                        src={Filter} 
                        alt="Filter" 
                        />
                    </button>
                        <div className={styles.filterOverflow} style={backFilterStyle}>
                            <div className={styles.filterConatiner} style={scaleStyle}>
                                <div className={styles.filterTitleDiv} >
                                    <span>Filter by Type</span>
                                    <button className={styles.cleanFilterButton} onClick={filterReset}>
                                        <svg 
                                            className={styles.cleanFilterImg} 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="768" 
                                            zoomAndPan="magnify" 
                                            viewBox="0 0 576 576" 
                                            height="768" 
                                            preserveAspectRatio="xMidYMid meet" 
                                            version="1.0">
                                                <defs>
                                                    <clipPath id="7e773fbdd6">
                                                        <path d="M 7.371094 7.371094 L 569.121094 7.371094 L 569.121094 569.121094 L 7.371094 569.121094 Z M 7.371094 7.371094 " clip-rule="nonzero"/>
                                                    </clipPath>
                                                </defs>
                                                <g clip-path="url(#7e773fbdd6)">
                                                    <path d="M 288.246094 7.371094 C 133.40625 7.371094 7.371094 133.40625 7.371094 288.246094 C 7.371094 443.089844 133.40625 569.121094 288.246094 569.121094 C 443.089844 569.121094 569.121094 443.089844 569.121094 288.246094 C 569.132812 287.472656 569.105469 286.703125 569.039062 285.929688 C 568.976562 285.160156 568.871094 284.394531 568.730469 283.632812 C 568.589844 282.875 568.410156 282.121094 568.195312 281.378906 C 567.976562 280.636719 567.726562 279.90625 567.4375 279.1875 C 567.148438 278.472656 566.824219 277.769531 566.46875 277.082031 C 566.109375 276.398438 565.71875 275.730469 565.292969 275.085938 C 564.871094 274.4375 564.414062 273.8125 563.929688 273.210938 C 563.441406 272.609375 562.929688 272.03125 562.386719 271.480469 C 561.84375 270.929688 561.273438 270.410156 560.679688 269.914062 C 560.082031 269.417969 559.464844 268.957031 558.824219 268.523438 C 558.183594 268.089844 557.523438 267.6875 556.84375 267.320312 C 556.160156 266.953125 555.464844 266.621094 554.75 266.320312 C 554.039062 266.023438 553.3125 265.761719 552.570312 265.535156 C 551.832031 265.308594 551.082031 265.117188 550.324219 264.964844 C 549.566406 264.8125 548.800781 264.699219 548.03125 264.621094 C 547.261719 264.546875 546.488281 264.507812 545.714844 264.507812 C 544.941406 264.507812 544.171875 264.546875 543.402344 264.621094 C 542.632812 264.699219 541.867188 264.8125 541.109375 264.964844 C 540.351562 265.117188 539.601562 265.308594 538.863281 265.535156 C 538.121094 265.761719 537.394531 266.023438 536.683594 266.320312 C 535.96875 266.621094 535.269531 266.953125 534.589844 267.320312 C 533.910156 267.6875 533.25 268.089844 532.609375 268.523438 C 531.96875 268.957031 531.347656 269.417969 530.753906 269.914062 C 530.160156 270.410156 529.589844 270.929688 529.046875 271.480469 C 528.503906 272.03125 527.988281 272.609375 527.503906 273.210938 C 527.019531 273.8125 526.5625 274.4375 526.136719 275.085938 C 525.714844 275.730469 525.324219 276.398438 524.964844 277.082031 C 524.609375 277.769531 524.285156 278.472656 523.996094 279.1875 C 523.707031 279.90625 523.457031 280.636719 523.238281 281.378906 C 523.023438 282.121094 522.84375 282.875 522.703125 283.632812 C 522.5625 284.394531 522.457031 285.160156 522.390625 285.929688 C 522.328125 286.703125 522.300781 287.472656 522.308594 288.246094 C 522.308594 417.789062 417.789062 522.308594 288.246094 522.308594 C 158.707031 522.308594 54.183594 417.789062 54.183594 288.246094 C 54.183594 158.707031 158.707031 54.183594 288.246094 54.183594 C 347.042969 54.183594 400.375 75.976562 441.441406 111.648438 L 381.871094 171.214844 L 522.308594 171.214844 L 522.308594 30.777344 L 474.582031 78.507812 C 424.953125 34.414062 359.726562 7.371094 288.246094 7.371094 Z M 288.246094 7.371094 "/>
                                                </g>
                                        </svg>
                                    </button>
                                    <button onClick={handleReset}>
                                        <svg 
                                            className={styles.closeImg} 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="768" zoomAndPan="magnify" 
                                            viewBox="0 0 576 576" 
                                            height="768" 
                                            preserveAspectRatio="xMidYMid meet" 
                                            version="1.0">
                                                <path d="M 568.355469 44.71875 L 325.019531 288 L 568.355469 531.28125 C 573.09375 536.019531 576.027344 542.59375 576.027344 
                                                549.816406 C 576.027344 564.296875 564.296875 576.027344 549.816406 576.027344 C 542.59375 576.027344 536.019531 573.09375 
                                                531.28125 568.355469 L 288 325.019531 L 44.71875 568.355469 C 39.980469 573.09375 33.40625 576.027344 26.183594 576.027344 
                                                C 11.703125 576.027344 -0.0273438 564.296875 -0.0273438 549.816406 C -0.0273438 542.59375 2.90625 536.019531 7.644531 531.28125 
                                                L 250.980469 288 L 7.644531 44.71875 C 2.90625 39.980469 -0.0273438 33.40625 -0.0273438 26.183594 C -0.0273438 11.703125 11.703125 
                                                -0.0273438 26.183594 -0.0273438 C 33.40625 -0.0273438 39.980469 2.90625 44.71875 7.644531 L 288 250.980469 L 531.28125 7.644531 C 
                                                536.019531 2.90625 542.59375 -0.0273438 549.816406 -0.0273438 C 564.296875 -0.0273438 576.027344 11.703125 576.027344 26.183594 C 
                                                576.027344 33.40625 573.09375 39.980469 568.355469 44.71875 Z M 568.355469 44.71875 "/>
                                        </svg>
                                        <svg 
                                            className={styles.filterImg} 
                                            version="1.1" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            x="0px" 
                                            y="0px" 
                                            viewBox="0 0 735 768">
                                                <g id="Capa_2">
                                                </g>
                                                <g id="Capa_1">
                                                	<g>
                                                		<defs>
                                                			<rect id="SVGID_1_" x="1.2" y="0.2" width="732" height="767.6"/>
                                                		</defs>
                                                		<clipPath id="SVGID_00000025434924962780503690000000849915630612554641_"></clipPath>
                                                		<g>
                                                			<path d="M1.3,36.8c0-20.2,16.4-36.6,36.6-36.6h658.6c20.2,0,36.6,16.4,36.6,36.6v109.7c0,10.7-4.7,20.8-12.8,27.8
                                                				L476.9,382.7v275.8c0,13.9-7.8,26.5-20.2,32.7l-146.3,73.1c-11.2,5.6-24.6,5.1-35.3-1.4c-10.8-6.5-17.4-18.1-17.6-30.7
                                                				l-5.5-349.5L13.8,174C5.8,167,1.3,157,1.3,146.5V36.8z M74.5,73.3v56.6l237.9,208.5c7.8,6.8,12.3,16.6,12.5,26.9l4.8,307.6
                                                				l74.1-37v-270c0-10.7,4.7-20.8,12.8-27.8l243.3-208.5V73.3H74.5z"/>
                                                		</g>
                                                	</g>
                                                </g>
                                        </svg>
                                    </button>
                                </div>
                                <hr />
                                <div className={styles.filterDiv}>
                                    <input
                                    id="pokemon-input"
                                    type="text"
                                    value={type}
                                    onChange={(event) => setType(event.target.value)}
                                    style={{ display: "none" }}
                                    />
                                    <img src={water} alt="Water" onClick={() => {setType('water')}}/>
                                    <img src={steel} alt="steel" onClick={() => {setType('steel')}}/>
                                    <img src={rock} alt="rock" onClick={() => {setType('rock')}}/>
                                    <img src={psychic} alt="psychic" onClick={() => {setType('psychic')}}/>
                                    <img src={poison} alt="poison" onClick={() => {setType('poison')}}/>
                                    <img src={normal} alt="normal" onClick={() => {setType('normal')}}/>
                                    <img src={ice} alt="ice" onClick={() => {setType('ice')}}/>
                                    <img src={ground} alt="ground" onClick={() => {setType('ground')}}/>
                                    <img src={grass} alt="grass" onClick={() => {setType('grass')}}/>
                                    <img src={ghost} alt="ghost" onClick={() => {setType('ghost')}}/>
                                    <img src={flying} alt="flying" onClick={() => {setType('flying')}}/>
                                    <img src={fire} alt="fire" onClick={() => {setType('fire')}}/>
                                    <img src={fighting} alt="fighting" onClick={() => {setType('fighting')}}/>
                                    <img src={electric} alt="electric" onClick={() => {setType('electric')}}/>
                                    <img src={fairy} alt="fairy" onClick={() => {setType('fairy')}}/>
                                    <img src={dragon} alt="dragon" onClick={() => {setType('dragon')}}/>
                                    <img src={dark} alt="dark" onClick={() => {setType('dark')}}/>
                                    <img src={bug} alt="bug" onClick={() => {setType('bug')}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                <menu className={styles.containerMenu}>
                    <Link to="/map" className={styles.menuLink}>
                        <img className={styles.iconMenu} src={Pointer} alt="Pickachu" />
                    </Link>
                    <Link to="/items" className={styles.menuLink}>
                        <img className={styles.iconMenu} src={Pokeball} alt="Pickachu" />
                    </Link>
                </menu>
            </header>
};

export default Header;