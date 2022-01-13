export const actions = {
     GETPOKEMONS:'GETPOKEMONS',
     GETYPES:'GETYPES',
     CREATEPOKEMON:'CREATEPOKEMON',
     GETPOKEMONFORID:'GETPOKEMONFORID',
     FILTERPOKEMONS:'FILTERPOKEMONS',
     GETPOKEMONFORNAME:'GETPOKEMONFORNAME',
     LOADING:'LOADING',
    
}


export const getPokemons = () => {
    return  (dispatch) => {
        return  fetchRequest('http://localhost:3001/pokemons',actions.GETPOKEMONS,dispatch);
    }
}

export const getTypes  = () => {
    return  (dispatch) => {
        return  fetchRequest('http://localhost:3001/types',actions.GETYPES,dispatch);
    }
}

export const getPokemonForId = (id) => {
    return  (dispatch) => {
        return fetchRequest(`http://localhost:3001/pokemons/${id}`,actions.GETPOKEMONFORID,dispatch);
    }
}

export const getPokemonForName = (name) => {
    return  (dispatch) => {
        return  fetchRequest(`http://localhost:3001/pokemons?name=${name}`,actions.GETPOKEMONFORNAME,dispatch);
        }
}

export const createPokemon = (data) => {
    fetch('http://localhost:3001/pokemons', {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)}
        )
        .then(res => res.json())
        .catch(error => console.log(error))
}


export const filterPokemons = (conditions) => {
    return {
        type:actions.FILTERPOKEMONS,
        payload: conditions
    }
}

const fetchRequest = (url,action,dispatch) => {
    return fetch(url)
    .then(res => res.ok ? res.json() : (action === actions.GETPOKEMONFORID? {} :[]))
    .then(data => dispatch({type:action,payload:data}))
    .catch(error => console.log(error))
} 

export const setLoading = (stateLoading) => {
    return {
        type:actions.LOADING,
        payload: stateLoading
    }
}

