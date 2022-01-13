import React from "react";
import {useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux";
import { getPokemonForId, setLoading } from "../redux/Actions";
import PokemonDetailCard from "./PokemonDetailCard";
import NavBar from "./NavBar";
import Loading from "./Loading";
import styleDetail from "../Styles/PokemonDetailCard.module.css"
import NotFound from "./NotFound";


export default function PokemonDetail(){
    
    let {id} = useParams();
    const dispatch = useDispatch();
    const {pokemonDetail,loading} = useSelector(state => state);
    
    React.useEffect(() => {
        dispatch(setLoading(true))
        dispatch(getPokemonForId(id));
    },[dispatch,id])

    return (
      <div className = {styleDetail.principalContainer}>
        <NavBar />
        {loading && <Loading />}
        {!loading && pokemonDetail.types  && 
         <PokemonDetailCard id= {pokemonDetail.id}  name = {pokemonDetail.name} types = {pokemonDetail.types}
           weight = {pokemonDetail.weight} height={pokemonDetail.height} speed = {pokemonDetail.speed} attack = {pokemonDetail.attack}
           defense = {pokemonDetail.defense} hp = {pokemonDetail.hp}  img = {pokemonDetail.img}
         /> 
        }
        {!loading && !pokemonDetail.types && <NotFound />}
      </div>
    )
    
}