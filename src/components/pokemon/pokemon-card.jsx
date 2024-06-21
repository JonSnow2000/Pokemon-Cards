import React,{useState,useEffect} from 'react';
import { fetchData } from '../apis/pokemon-api';
import { Button } from '../button/button';

export function PokemonCard({pokemonURL,handleKnowMore}){
    const [pokemon,setPokemon]=useState();
    useEffect(()=>{
        fetchData(pokemonURL).then((data)=>{
            setPokemon(data);
        })
    },[])
    return(
        <>
        {pokemon && (<div className={`pokemon-card-container ${pokemon.type}`}>
           <div className='pokemon-id-container'>
                <small>#{pokemon?.id}</small>
            </div>
            <img className='pokemon-img' src={pokemon.image} alt='image'/>
            <h3 className='pokemon-name'>{pokemon.name.toUpperCase()}</h3>
            <small>Type: {pokemon.type}</small>
            <Button buttonText={"Know More"} handleClick={()=>handleKnowMore(pokemon)}/>
        </div>)}
        </>
    )
}