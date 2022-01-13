import { actions } from "./Actions";
import { filterPokemons } from "../Utils/filters";
const initialState = {
    pokemons:[],
    pokemonDetail: {},
    pokemonsFiltered:[],
    types:[],
    loading :true
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case actions.GETPOKEMONS:
          return {
            ...state,
            pokemons:action.payload,
            pokemonsFiltered:action.payload,
            loading:false
          }   
        case actions.GETYPES:
        return {
          ...state,
          types:action.payload
        } 
        case actions.GETPOKEMONFORID:
        return {
          ...state,
          pokemonDetail:action.payload,
          loading:false
        } 
        case actions.FILTERPOKEMONS:
        return {
          ...state,
          pokemonsFiltered:filterPokemons(state.pokemons,action.payload)
        }  
        case actions.GETPOKEMONFORNAME:
        return {
          ...state,
          pokemons:action.payload,
          pokemonsFiltered:action.payload,
          loading:false
        } 
        case actions.LOADING:
        return {
          ...state,
          loading:action.payload
        }  
        default: return state
    }

}

export default rootReducer;