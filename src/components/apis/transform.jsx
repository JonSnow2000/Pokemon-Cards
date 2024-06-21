export function transform(pokemonData){
    const pokemonDeatil={
        name:pokemonData.name,
        id:pokemonData.id,
        type:pokemonData.types[0].type.name,
        height:pokemonData.height,
        weight:pokemonData.weight,
        image:pokemonData.sprites.other.dream_world.front_default,
        stats: pokemonData.stats.map((stat) => {
            return {
                bs: stat.base_stat,
                stat_name: stat.stat.name
            };
        })
    }
    return pokemonDeatil;
}