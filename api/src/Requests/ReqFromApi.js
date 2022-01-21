const axios = require('axios');



const getAllPokemonsFromApi =  async () => {
    try{
        let pokemonsArray = [];
        let pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon');
        pokemonsArray = pokemons.data.results;
        pokemons = await axios.get(pokemons.data.next)
        pokemonsArray = pokemonsArray.concat(pokemons.data.results);
         return Promise.all(pokemonsArray.map(pokemon => axios.get(pokemon.url)))
               .then(pokemonsDetail => pokemonsDetail.map(pokemonDetail => detailsPokemon(pokemonDetail.data)))
              .catch(e => console.log(e)) 
    }catch(e){
        return [];
    }
}

const detailsPokemon = (pokemon) => {
     return {
        name:pokemon.forms[0].name,
        id:pokemon.id,
        img:pokemon.sprites.other.dream_world.front_default,
        types:pokemon.types.map(typeOf => {return {name:typeOf.type.name}}),
        attack:pokemon.stats[1].base_stat,
       }
}

const getPokemonApiForid = async (id) => {
    try{
       let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) 
       return  {
        name:pokemon.data.forms[0].name,
        id:pokemon.data.id,
        img:pokemon.data.sprites.other.dream_world.front_default,
        types:pokemon.data.types.map(typeOf => {return {name:typeOf.type.name}}),
        height:pokemon.data.height,
        weight:pokemon.data.weight,
        attack:pokemon.data.stats[1].base_stat,
        defense:pokemon.data.stats[2].base_stat,
        speed:pokemon.data.stats[5].base_stat,
        hp:pokemon.data.stats[0].base_stat
        }
    }catch(e){
        return {};
    }
}

const getAllPokemonsFromApiForName = async (name) => {
    try{
        let pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return [detailsPokemon(pokemons.data)]  
    }catch(e){
        return [];
    }
}

const getTypesFromApi = async () => {
    try{
        let types = await axios.get('https://pokeapi.co/api/v2/type');
        return types.data.results.map(type => {
          return { name:type.name}
        })
    }catch(e){
        return {};
    }  
}


module.exports = {
    getAllPokemonsFromApi,
    getPokemonApiForid,
    getAllPokemonsFromApiForName,
    getTypesFromApi
}