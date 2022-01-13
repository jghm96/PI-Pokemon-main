import React from "react";
import {NavLink} from "react-router-dom";
import styleNavBar from "../Styles/Navbar.module.css";
import logo from "../images/pokemonLogo.png";

export default function NavBar(){
    return (
        <div className={styleNavBar.container}>
          <div className = {styleNavBar.divLogo}>
            <img className = {styleNavBar.imgLogo} alt = "logo" src = {logo}/>
          </div>
          <div className={styleNavBar.links}>
            <NavLink className={styleNavBar.link} to = "/home"> HOME</NavLink>
            <NavLink className={styleNavBar.link}to = "/create"> CREATE </NavLink>
          </div>
        </div>

    )
    
}