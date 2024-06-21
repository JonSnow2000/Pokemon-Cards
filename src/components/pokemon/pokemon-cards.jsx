import React,{useState,useEffect} from 'react'
import { fetchPokemons } from '../apis/pokemon-api'
import { PokemonCard } from './pokemon-card';
import { PokemonModal } from '../pokemon-modal/pokemon-modal';

export function PokemonCards(){
    const[offset,setOffset]=useState(0);
    const[pokemons,setPokemons]=useState([]);
    const[selectedPokemon,setSelectedPokemon]=useState();
    useEffect(()=>{
       fetchPokemons(offset,20).then((data)=>
       setPokemons((prevPokemons)=>prevPokemons.concat(data.results)));
    },[offset])
    function handleKnowMore(pokemon){
        setSelectedPokemon(pokemon);
    }
    return(
        <>
        <div style={{
            marginTop:180,
            display:'flex',
            flexWrap: 'wrap',
            justifyContent:'center',
            gap:10,
            
        }}>
            {pokemons.map((pokemon,index)=><PokemonCard key={index} pokemonURL={pokemon.url} handleKnowMore={handleKnowMore}/>)}
            {selectedPokemon && <PokemonModal pokemon={selectedPokemon} handleKnowMore={handleKnowMore}/>}
        </div> 
        <div>
            <button onClick={()=>{
                setOffset((prev)=>prev+20);
            }}>Show More</button>
        </div>
        </>
    )
} 