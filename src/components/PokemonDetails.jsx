
import { useParams } from "react-router-dom";


const PokemonDetails = (props) => {
    console.log(props); 
    const { pokemon } = props
    const { pokeId } = useParams()

    
    
    return (
      <>
        <h2>Pokemon Details</h2>
        <dl>
          <dt>Weight:</dt>
          <dd></dd>
          <dt>Height:</dt>
          <dd></dd>
        </dl>
      </>
    );
  };
  
  export default PokemonDetails;