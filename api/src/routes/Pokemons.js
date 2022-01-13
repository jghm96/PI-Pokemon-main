const { Router } = require('express');
const {getAllPokemonsFromApi, getPokemonApiForid,getAllPokemonsFromApiForName} = require('../Requests/ReqFromApi')
const {createPokemon, getPokemonsFromDb,getPokemonById} = require('../Requests/reqFromDb')

const pokemons = Router();

pokemons.get("/", async(req,res) => {
   let {name} = req.query

   if (!name)
     res.json((await getAllPokemonsFromApi()).concat(await getPokemonsFromDb()))
   else{
       let pokemons = (await getAllPokemonsFromApiForName(name)).concat(await getPokemonsFromDb(name))
       pokemons.length > 0 ? res.json(pokemons) : res.status(404).send({error:"not found"}) 
   }
});

pokemons.get("/:idPokemon", async (req,res) => {
   
   let {idPokemon} = req.params;
   let db = await getPokemonById(idPokemon);
   if(db)
     res.json(db)
   else{
    let api = await getPokemonApiForid(idPokemon)
    api.speed ?  res.json(api) : res.status(404).send({error:"not found"})
   }
})

pokemons.post("/",async (req,res) => {
   let pokemonCreate = await createPokemon(req.body);
   pokemonCreate.error ? res.status(400).send(pokemonCreate) :res.status(201).json(pokemonCreate);
})

module.exports = pokemons;