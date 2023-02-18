import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Pokemon,Pokemons,Items } from './pages';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path='/pokemons/:name' element={<Pokemon />} />
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='/items' element={<Items/> } />
          <Route path='/' element={<Pokemons/> } />

          
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
