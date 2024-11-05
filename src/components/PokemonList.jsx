import { Link } from "react-router-dom"


const PokemonList = (props) => {
    return (
      <>
        <h2>Pokemon</h2>
        <ul>
          {props.pokemon.map((currentPokemon, idx) => (
            
                <Link to={`/pokemon/${currentPokemon._id}`}> 
                     <li key={currentPokemon.name}>{currentPokemon.name}</li>
                </Link>
              
          ))}
        </ul>
      </>
    );
  };
  
  export default PokemonList;
  