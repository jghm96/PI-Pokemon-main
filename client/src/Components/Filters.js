import React, { useState } from "react";
import { filterPokemons,getPokemons,getPokemonForName, setLoading} from "../redux/Actions"
import { useDispatch } from "react-redux";
import styleFilters from "../Styles/Filters.module.css"
import reset from "../images/reset.png"
import search from "../images/search.png"

const initialStateFilters = {
    search:"",
    orderBy:"orderBy",
    type:"All",
    created:"all sources"
}
//cambio
const orderBy = ["A-Z","Z-A","more attack","less attack"];
const created = ["all sources","api","database"]

export default function Filters({setActualPage,types}){
  const [filterState, setfilterState] = useState(initialStateFilters)
  const dispatch = useDispatch();
   
  const handlerFilterState = (e) => {
    setActualPage(1);
    dispatch(filterPokemons(changeStateFilter(e)));
  } 

  const changeStateFilter = (e) => {
      const newState = {
          ...filterState,
          [e.target.id]:e.target.value
      }
      setfilterState(newState);
      return newState;
  }

  const resetFilters = () => {
      dispatch(setLoading(true));
      setfilterState(initialStateFilters);
      dispatch(getPokemons());
  }

  const searchHandler = (e) => {
      dispatch(setLoading(true));
      setfilterState(initialStateFilters);
      dispatch(getPokemonForName(filterState.search));
  }

  return (
    <div className = {styleFilters.container}>
      <div className={styleFilters.containerSearch}>
        <input className={styleFilters.input} placeholder="SEARCH" id = "search" value={filterState.search} onChange={changeStateFilter}/>
        <button className={styleFilters.inputButton} id = "search" value = "" onClick={(e) => searchHandler(e)}>
          <img src = {search} alt = "search " className = {styleFilters.iconImg} / >
        </button>
      </div>
      <div className={styleFilters.containerSelects}>
        <select className={styleFilters.select} id = "type" value={filterState.type}  onChange={handlerFilterState}>
          <option  value = "All" id = "type" >TYPE</option>
           {
            types.map(type => <option key = {type.name} id = "type" value = {type.name}>{type.name.toUpperCase()}</option>)
           }
        </select>
        <select className={styleFilters.select}  id = "created" value={filterState.created}  onChange={handlerFilterState}>
          {
           created.map(option => <option key = {option} id = "created" value = {option}>{option.toUpperCase()}</option>)
          }
        </select>
        <select className={styleFilters.select} id = "orderBy" value={filterState.orderBy} onChange={handlerFilterState}>
          <option disabled value = "orderBy" >ORDER BY</option>
          {
           orderBy.map(option => <option key = {option} id = "orderBy" value = {option}>{option.toUpperCase()}</option>)
          }  
        </select>        
      </div>    
      <button className = {styleFilters.reset} onClick = {resetFilters}><img src = {reset} alt = "reset " className = {styleFilters.iconImg} / ></button>
    </div>
    )  
}