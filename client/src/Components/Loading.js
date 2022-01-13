import React from "react";
import styleLoading from "../Styles/Loading.module.css"


export default function Loading(){
  
  return (
    <div className={styleLoading.wrapper}>
      <div className={styleLoading.pokeball}>
      </div>
    </div>
  )
}