import React from "react";
import stylePokemons from "../Styles/Pokemons.module.css"
import PokemonCard from "./PokemonCard";


export default function Pokemons({pokemons}){
    
    return (
      <div className={stylePokemons.grid} >
        {
          pokemons.map(pokemon => <PokemonCard name = {pokemon.name} key = {pokemon.id}
          img = {pokemon.img} id = {pokemon.id} types = {pokemon.types} attack={ pokemon.attack}/>)
        }
      </div>
    )
}