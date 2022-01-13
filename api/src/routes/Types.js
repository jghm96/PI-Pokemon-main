const { Router} = require('express');
const types = Router();
const {getTypesFromApi} = require('../Requests/ReqFromApi')
const {createTypes, getTypes } = require('../Requests/reqFromDb')

let typesInDb = false;


types.get("/",async (req,res) => {

    if(!typesInDb){
       let types = await getTypesFromApi();
       await createTypes(types);
       typesInDb = true;
    }
    res.json(await getTypes());
})


module.exports = types;