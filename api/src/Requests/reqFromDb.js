const {Pokemon,Type} = require('../db') 
const uuid = require('uuid');

const createTypes = async (types) => {
    try{
        await Type.bulkCreate(types)
    }catch(e){
        console.log(e);
    }
}

const getTypes = async () => {
    try{
       return await Type.findAll({
            attributes: ["name"]
       })
    } catch(e){
        console.log(e);
    }
}

const createPokemon = async (data) => {
   try{
    let id = uuid.v4().toString();
    let pokemonCreate = await Pokemon.create({
        name:data.name,
        id,
        img:data.img,
        height:parseInt(data.height),
        weight:parseInt(data.weight),
        attack:parseInt(data.attack),
        defense:parseInt(data.defense),
        speed:parseInt(data.speed),
        hp:parseInt(data.hp)
    })
 
    let types = await Type.findAll({ 
        where:{
            name:data.types
        }
       });

    pokemonCreate.addType(types);

    return pokemonCreate;

   }catch(e){
       return {error:"error in data"}
   }
}

const getPokemonsFromDb = async (name) => {
   try{
        let condition = {
            attributes:["name","id","img","attack","fromDb"],
            include:{
              model: Type,
              attributes: ["name"],
              through: {attributes: [],}
            }
        }
       condition = name ? {  ...condition, where:{name} } : condition;
       return  await Pokemon.findAll(condition);
    }catch(e){
        console.log(e);
    }
}

const getPokemonById = async (id) => {
    let findPokemon = await Pokemon.findByPk(id,{
        attributes:["name","id","hp","height","weight","speed","attack","defense","img"],
            include:{
              model: Type,
              attributes: ["name"],
              through: {attributes: [],}
            }
    })
    return findPokemon;
}



module.exports = {
    createTypes,
    getTypes,
    createPokemon,
    getPokemonsFromDb,
    getPokemonById
    
}