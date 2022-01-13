import React from "react";
import style from "../../Styles/ImagesForm.module.css"

export default function ImageForm({stateForm,changeStateForm}){

  const images = ["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/52.svg","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/172.svg"];
  return (
    <div  className={style.container}>
      <img className= {style.imgShow} src = {stateForm.img} alt = "selected" />
      <div className= {style.imgDiv}>
        {images.map((img,pos) => 
         <button key ={pos} type = "button" className= {style.imgBtn} name = "img" id= {pos} onClick={(e) => changeStateForm(e.target.name,images[e.target.id])}>
          <img className= {style.img} name = "img" id = {pos} alt = "option" src = {img}/>
         </button>
          )
        }
      </div>
    </div>
    )   
}