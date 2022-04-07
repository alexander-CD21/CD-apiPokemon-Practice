
function Pokemon( props ){
    return(
        <div>
        
            {props.pokemon.data && props.pokemon.data.results.map( (pokemon, index)=>{
                return (
                <li key={index}>
                    {pokemon.name}
                </li>
                );
            })
            }
        </div>
    );
}

export default Pokemon;