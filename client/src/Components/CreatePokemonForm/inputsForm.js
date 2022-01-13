import React from "react";
import utils from "../../Styles/Utils.module.css"
import styleInputs from "../../Styles/inputsForm.module.css"

const inputs = ["name","hp","attack","defense","speed","height","weight"];
export default function InputsForm({stateForm,changeStateForm,errorForm,setErrorForm,validateForm}){

  const inputHandler = (e) => {
    setErrorForm({ ...errorForm,[e.target.id]:validateForm(e.target.id,e.target.value)});
    changeStateForm(e.target.id,e.target.value)
   }

  return (
    <div className={utils.detailsInfo}>
      {
       inputs.map(input => <div className={`${styleInputs.divInput} ${utils.fontFamily}`} key = {input}>
        <label className={styleInputs.name}>{input.toUpperCase()}</label>
        <input className={styleInputs.input} id = {input} placeholder = "TYPE HERE" value = {stateForm[input]} onChange={inputHandler} />
        {<span className={styleInputs.error}>{errorForm[input]}</span>}
        </div>)
      }
    </div>
    )

}