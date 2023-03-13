import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useState } from 'react';

const Pokemons = () => {
    const [query, setQuery] = useState("");
    return <>
    <Header query={query} setQuery={setQuery}/>
    <main>
        <h1>Pokemons</h1>
    </main>
    <Footer/>
    </>
};

export default Pokemons;