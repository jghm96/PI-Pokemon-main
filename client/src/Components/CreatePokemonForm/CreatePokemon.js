import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {getTypes,createPokemon} from "../../redux/Actions";
import {useNavigate} from "react-router-dom";
import NavBar from "../NavBar";
import styleCreate from "../../Styles/CreatePokemon.module.css"
import InputsForm from "./inputsForm";
import utils from "../../Styles/Utils.module.css"
import TypesForm from "./TypesForm"
import pokebola from "../../images/pokebola.png"
import ImageForm from "./ImageForm"
import { validateForm ,validateSubmit} from "../../Utils/ValidationForm";
import ErrorSubmit from "./ErrorSubmit";

const initialStateError = {
  name:"",
  hp:"",
  height:"",
  weight:"",
  speed:"",
  attack:"",
  defense:"",
}

const initialState = {
  ...initialStateError,
   types:[],
   img:pokebola
 }

export default function CreatePokemon(){
  const [stateForm, setStateForm] = React.useState(initialState);
  const [errorForm, setErrorForm] = React.useState(initialStateError);
  const [errorSubmitForm,seterrorSubmitForm] = React.useState({});
  const dispatch = useDispatch();
  const {types} = useSelector(state => state);
  const navigate = useNavigate();
    
  React.useEffect(() => {
    types.length === 0 && dispatch(getTypes());
  },[dispatch,types.length])

  const changeStateForm = (id,value) =>{
    setStateForm({ ...stateForm, [id]:value})
  } 

  const changeTypes = (e) => {
    if(stateForm.types.includes(e.target.value))
      changeStateForm("types",stateForm.types.filter(type => type !== e.target.value));
    else{
      if(stateForm.types.length <= 2)
      changeStateForm("types",[...stateForm.types,e.target.value]);
    }
  }

  const submit =  (e) => {
    e.preventDefault();
    const validateError = validateSubmit(errorForm,stateForm);
    if(validateError !== "")
      seterrorSubmitForm({error:validateError})
    else{
      createPokemon(stateForm);
      navigate("../home");
    }
  }
 
  return (
    <div className={styleCreate.container}>
      <NavBar />
      {errorSubmitForm.error && <ErrorSubmit errorSubmitForm={errorSubmitForm} seterrorSubmitForm = {seterrorSubmitForm}/>}
      <form className={`${utils.containerDetail} ${utils["mix"]} ${errorSubmitForm.error && styleCreate.errorSubmit}`} onSubmit={submit}>
        <ImageForm stateForm = {stateForm} changeStateForm = {changeStateForm}/>
        <div className={styleCreate.head}>
          <h1>CREATE</h1>
          {types.length > 0 && <TypesForm changeTypes = {changeTypes} types = {types} stateForm = {stateForm}/>}
        </div>
        <InputsForm  stateForm={stateForm} changeStateForm={changeStateForm} errorForm = {errorForm} 
        setErrorForm = {setErrorForm} validateForm={validateForm}
        />
        <input className={styleCreate.submit} type= "submit" />
      </form>
    </div>
    ) 
}