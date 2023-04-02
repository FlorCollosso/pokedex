import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Items, Pokemon, Pokemons, Map } from './pages';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/pokemons/:id" element={<Pokemon/>}/>
          <Route path="/pokemons" element={<Pokemons/>}/>
          <Route path="/items" element={<Items/>}/>
          <Route path="/map" element={<Map/>}/>
          <Route path="/" element={<Pokemons/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
