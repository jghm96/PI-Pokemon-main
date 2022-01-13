import './App.css';
import React from "react"
import {Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import LandingPage from './Components/LandingPage';
import CreatePokemon from './Components/CreatePokemonForm/CreatePokemon';
import PokemonDetail from './Components/PokemonDetail';
import NotFound from './Components/NotFound';

function App() {
  
  return (
    <React.Fragment>
      <Routes>
        <Route exact path = "/" element = {<LandingPage />} />
        <Route exact path = "/home" element = {<Home />} />
        <Route exact path = "/create" element = {<CreatePokemon />} />
        <Route exact path = "/pokemon/:id"  element = {<PokemonDetail />} />
        <Route path = "*" element = {<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
