import React from "react";
import styleCard from "../Styles/PokemonCard.module.css";
import utils from "../Styles/Utils.module.css"
import {NavLink} from "react-router-dom"
import attackImg from "../images/attack.png"


export default function PokemonCard({id ,img,name,types,attack}){
  const colorContainer = types.length ===1 ? types[0].name : 'mix';
  return (
    <div className={`${styleCard.card} ${utils[colorContainer]}`}>
      <h4 className = {styleCard.name}>{name.toUpperCase()}</h4>
      <div className={`${styleCard.moreInfoDiv} ${utils[colorContainer]}`}>
        <NavLink  className = {styleCard.navLink} to = {`/pokemon/${id}`}>More Info</NavLink>
      </div>
      <img className = {styleCard.img} alt = "pokemon" src ={img}/>
      <div className={styleCard.detailContainer}>
        <div className={styleCard.attack}>
          <img alt = "attack" src = {attackImg} className={styleCard.imgAttack}/>
          <span>{attack}</span>
        </div>
      <p>TYPES</p>
        {
         types.map(type => 
          <span className={`${styleCard.type} ${utils[type.name]}`} key = {type.name}>{type.name.toUpperCase()}</span>
         )
        }
      </div>
    </div>
    )
}