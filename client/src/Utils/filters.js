export const  filterPokemons = (pokemons,condition) => {
    if(condition.orderBy === "A-Z" || condition.orderBy === "Z-A")
      pokemons = order(pokemons,condition.orderBy,"name");
    if(condition.orderBy === "more attack" || condition.orderBy === "less attack")
      pokemons = order(pokemons,condition.orderBy,"attack");
    if(condition.created !== "all sources")
      pokemons = pokemonsByCreate(pokemons,condition.created)
    if(condition.type !== "All")
      pokemons = pokemonsByType(pokemons,condition.type)
    return pokemons;       
}

const order = (pokemons,order,conditionOrder) => {
    let orderedArray = pokemons.sort((a, b) =>
    a[conditionOrder] > b[conditionOrder] ? 1 : a[conditionOrder] < b[conditionOrder] ? -1 : 0);

    if(order === "A-Z" || order === "less attack") 
      return orderedArray;
    else if (order === "Z-A" || order === "more attack")
     return orderedArray.reverse();
}

const pokemonsByCreate = (pokemons,createdFor) =>{
    if (createdFor === "api")
      return pokemons.filter(el => !el.fromDb)
   else 
      return pokemons.filter(el => el.fromDb) 
 }

 const pokemonsByType = (pokemons,type) => {
   let pokemonsFiltered = [];
   for(let i = 0 ; i < pokemons.length ; i++){
       for(let j = 0; j < pokemons[i].types.length; j++){
          if(pokemons[i].types[j].name === type)
              pokemonsFiltered.push(pokemons[i]);
       }
   }
   return pokemonsFiltered
 }

