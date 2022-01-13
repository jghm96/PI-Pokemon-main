export const validateForm = (id,value) => {
     
    if(id === "name" && !/^[a-zA-Z]+$/.test(value))
     return "Name must be plain text";
    if((id === "speed" || id === "hp") && !isInInterval(value,1,100))
     return "Must be between 1 and 100";
    if((id === "attack" || id === "defense") &&  !isInInterval(value,1,250))
     return "Must be between 1 and 250";
    if((id === "weight") &&  !isInInterval(value,1,1000))
     return "Must be between 1 and 1000";
    if((id === "height") && !isInInterval(value,1,20))
    return "Must be between 1 and 20";
    return "";
}

const isInInterval = (value, initial, final) => {
   let number = parseInt(value);
   let resultado = (/^[1-9][0-9]{0,8}$/.test(value) && (number >= initial  && number <= final));
   return resultado;
}

export const validateSubmit = (errorState,formState) => {
    if(!validateTypesSubmit(formState.types))
      return "Type cant be empty";
    if(!validateInputsSubmit(errorState,formState))
      return "Inputs cant be empty or with errors"
    return "";
}

const validateTypesSubmit = (types) => {
    return (types.length > 0);
}

const validateInputsSubmit = (errorState, formState) => {
  return (validateStatus(errorState,(value) => value !== "") && (validateStatus(formState,(value) => value === "")));
}

const validateStatus = (state,cb) => {
    for(const property in state){
        if(cb(state[property]))
         return false;
    }
    return true;
}

