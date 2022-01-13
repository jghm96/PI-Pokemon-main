import React from "react";
import {useDispatch,useSelector} from "react-redux";
import { getPokemons, getTypes, setLoading } from "../redux/Actions";
import Pokemons from "./Pokemons";
import Pagination from "./Pagination";
import Filters from "./Filters";
import NavBar from "./NavBar";
import styleHome from "../Styles/Home.module.css"
import utils from "../Styles/Utils.module.css"
import Loading from "./Loading";
import NotFound from "./NotFound";
const POKEMONSFORPAGE = 12 ;


export default function Home(){
  const dispatch = useDispatch();
  const {pokemonsFiltered,types,loading} = useSelector(state => state);
  const [actualPage, setActualPage] = React.useState("1");
  let TopPokemons = POKEMONSFORPAGE * actualPage;
  let initialPokemons = TopPokemons - POKEMONSFORPAGE;

  React.useEffect(() => {
    dispatch(setLoading(true))
    dispatch(getTypes());
    dispatch(getPokemons());
   },[dispatch])

  return (
    <div className={`${styleHome.home} ${utils.fontFamily}`}>
      <NavBar />
      {loading && <Loading/>}
      {!loading && <Filters types = {types} setActualPage={setActualPage}/>}
      {!loading && pokemonsFiltered.length > 0 && 
       <Pokemons pokemons={pokemonsFiltered.slice(initialPokemons,TopPokemons)}/> 
      }
      { !loading && (pokemonsFiltered.length === 0) && <NotFound /> }
      { !loading && <Pagination actualPage = {actualPage} totalPokemons = {pokemonsFiltered.length} 
        pokemonsForPage = {POKEMONSFORPAGE} setActualPage = {setActualPage}/>
      }
    </div>
    )
}