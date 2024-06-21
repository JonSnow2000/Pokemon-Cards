import { transform } from "./transform";
export async function fetchPokemons(offset, limit) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const data= await response.json();
    return data;
}

export async function fetchData(pokemonURL){
    const response=await fetch(pokemonURL);
    const pokemonData=await response.json();
    return transform(pokemonData) ;
}