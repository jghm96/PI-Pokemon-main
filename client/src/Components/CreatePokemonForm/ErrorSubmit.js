import React from "react";
import styleError from "../../Styles/ErrorSubmit.module.css"

export default function ErrorSubmit({errorSubmitForm,seterrorSubmitForm}){
  
  return (
    <div className={styleError.divError}>
      <p className={styleError.infoError} >{errorSubmitForm.error}</p>
      <button className={styleError.btn} onClick={(e) => seterrorSubmitForm({})}>OK</button>
    </div>
  )
}