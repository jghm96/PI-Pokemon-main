import React from "react";
import styleCreate from "../../Styles/TypesForm.module.css"
import utils from "../../Styles/Utils.module.css"

export default function TypesForm({stateForm,changeTypes,types}){
    return (
      <div className={styleCreate.container}>
        <p>TYPE</p>
        {
         stateForm.types.map(type => 
         <label className={`${styleCreate.labelType} ${utils[type]}`} key = {type}>{type.toUpperCase()}</label>
         )
        }
        <div className={styleCreate.item} onChange={changeTypes}>
          {
           types.map(type => <div key = {type.name}>
           <input  className = {styleCreate.checkBtn} type = "checkbox" name = {type.name }id = {type.name} value = {type.name} />
           <label className = {styleCreate.labelCheck} htmlFor = {type.name}> {type.name.toUpperCase()} </label>
           </div>)
          }
        </div>
      </div>
    )
            
           
}