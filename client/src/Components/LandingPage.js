import React from "react";
import styleLanding from "../Styles/LandingPage.module.css"
import { useNavigate } from "react-router";
import pokemonLogo from "../images/pokemonLogo.png"


export default function LandingPage(){
  
  const navigate = useNavigate();
  return (
    <div className={styleLanding.img}>
      <div className={styleLanding.divTitle}>
        <img alt = "inicio" src ={pokemonLogo} className = {styleLanding.pokemonLogo} />
      </div>
      <button onClick = {(e) => navigate("/home")} className = {styleLanding.btn}>START</button>
    </div>
  )
}