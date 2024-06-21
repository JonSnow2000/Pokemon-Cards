import React from 'react';
import './pokemon-modal.css';


export function PokemonModal({ pokemon,handleKnowMore }) {
    if(!pokemon){
        return null;
    }
    return (<div className={pokemon.type}
        style={{
            position: 'fixed',
            padding: 20,
            backgroundColor: 'white',
            display: "flex",
            gap: 40,
            border:'solid black 2px',
            WebkitBackdropFilter: 'blur(5px)',
            backdropFilter: 'blur(5px)',
        }}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            margin:'auto',
            textAlign:'center',
            paddingLeft:10,
        }} className='img-container'>
            <img className='pokemon-img' src={pokemon.image} alt={pokemon.name}></img>
            <h3 className='pokemon-name'>{pokemon.name.toUpperCase()}</h3>
        </div>
        <div style={{
            display: 'flex',
            gap: 40,
        }} className={`stat-container ${pokemon.type}`}>
            <div style={{
                margin: 'auto',
            }}>
                <h4>Weight: {pokemon.weight}</h4>
                <h4>Height: {pokemon.height}</h4>
            </div>
            <div>
                {pokemon.stats.map((stat, index) => <h4 key={index}>Stat {index + 1}: <span>{stat.stat_name}</span> </h4>)}
            </div>
            <div>
                {pokemon.stats.map((stat, index) => <h4 key={index}>Bs {index + 1}: <span>{stat.bs}</span></h4>)}
            </div>
            <div className='close-btn' onClick={()=>handleKnowMore()}>
                X
            </div>
        </div>
    </div>)
}