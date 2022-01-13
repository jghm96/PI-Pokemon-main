import React from "react";
import stylesPages from "../Styles/Pagination.module.css";
import utils from "../Styles/Utils.module.css";

export default function Pagination( {totalPokemons,pokemonsForPage, setActualPage,actualPage}){

    const pages = () => {
        let totalPages = [];
        for( let i = 1 ; i <= Math.ceil(totalPokemons/pokemonsForPage); i++){
            totalPages.push(
            <button key = {i} onClick={(e) => setActualPage(e.target.id)} className = {`${stylesPages.btn}
             ${utils.fontFamily} ${parseInt(actualPage) === i && stylesPages.active }`} id = {i} >{i}</button>);
        }  
        return totalPages
    }
    
    return (
        <div className={stylesPages.container}>
          {pages()}
        </div>
    )
}