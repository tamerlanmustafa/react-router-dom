import './App.css'
import { useState } from 'react';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import NavBar from './components/NavBar';

import { Route, Routes } from 'react-router-dom';

const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={ '/'} element = {<h1>Hello Everybody!</h1>} />
        <Route path={'/pokemon'} element={<PokemonList pokemon={pokemon} />} />
        <Route path={'/pokemon/:pokeId'} element={<PokemonDetails pokemon={pokemon} />} />
        <Route path={'/*'} element={ <h1>Something went wrong, Resource not found</h1>} />
      </Routes>
    </>
  );
};

export default App;

