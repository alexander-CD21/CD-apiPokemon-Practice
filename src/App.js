import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Componentes/Formulario/Formulario';


function App() {
  {/*}
  const [pokemon,setPokemon] = useState( {data : null} );
  
  const buscarPokemon = () =>{
    console.log("pokemon");
  }
  
  const usePokemonEncuentra = () => {
    useEffect( () => {
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
      })
    },[] );
  }
  */}
  return (
    <div className='App'>
      <Formulario />

     {/*{pokemon.data && pokemon.data.results.map((pokemon, index)=>{
        return (
          <li key={index}>
            {pokemon.name}
          </li>
        );
      })
      }*/}
    </div>
  );
}

export default App;
