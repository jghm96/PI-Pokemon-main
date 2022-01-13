import React from "react";
import styleDetail from "../Styles/PokemonDetailCard.module.css"
import utils from "../Styles/Utils.module.css"
import attack from "../images/attack.png"
import defense from "../images/defense.png"
import speed from "../images/speed.png"
import height from "../images/height.png"
import weight from "../images/weight.png"
import hp from "../images/hp.png"

const details = [{name:"hp",max:"100",img:hp},{name:"speed",max:"100",img:speed},{name:"attack",max:"250",img:attack},
{name:"defense",max:"250",img:defense},{name:"height",max:"20",img:height},{name:"weight",max:"1000",img:weight}]

export default function PokemonDetailCard({id,types,img,weight,height,speed,name,hp,attack,defense}){
  const props = [hp,speed,attack,defense,height,weight]
  const colorContainer = types.length ===1 ? types[0].name : 'mix';
  
  return (
    <div className={`${utils.containerDetail} ${utils[colorContainer]}`}>
      <div className={styleDetail.head}>
        <h1 >{name.toUpperCase()}</h1>
        <p className={styleDetail.types}>TYPES:{types.map(type => 
          <span key = {type.name} className={styleDetail.type}>{type.name.toUpperCase()}</span>)} 
        </p> 
        <p className={styleDetail.id}>ID: {id}</p>
      </div>   
      <img className={styleDetail.img} alt = "pokemon" src ={img}/>
      <div className={utils.detailsInfo}>
        <div className={styleDetail.ranges}> 
          {
           details.map((detail,pos) => 
           <div className= {styleDetail.detailDiv} key = {detail.name}> 
              <span className= {styleDetail.detailSpan}>{detail.name.toUpperCase()}</span>
              <img alt = "detail" src = {detail.img} className= {styleDetail.iconsImg} />
              <label  htmlFor = {detail.name}>
                <input readOnly value = {props[pos]} id = {detail.name} type = "range"  max = {detail.max}  className={styleDetail.range}/> 
                {props[pos]}
              </label>
            </div>)
          }
        </div>
      </div>    
    </div>
        ) 
}