import { useEffect, useState } from 'react';
import Pokemon from '../Pokemon/Pokemon';

function Formulario ( props ) {

    const [pokemon,setPokemon] = useState( {data : null} );

    const usePokemonEncuentra = () => {
        fetch( `https://pokeapi.co/api/v2/pokemon` )
        .then( respuesta => {
          
          if( respuesta.ok ){
            return respuesta.json();
          }
        })
        .then( datos => {
          console.log( datos );
          setPokemon({ data: datos});
        })
        .catch( err => {
          console.log( err );
        } )
        //useEffect( () => {
        //},[] );
      }
    return(
        <div>
         
            <button  onClick={usePokemonEncuentra}>
                Fetch Pokemon
            </button>
            <Pokemon pokemon={pokemon} />
          
        </div>
    )

}
export default Formulario; 