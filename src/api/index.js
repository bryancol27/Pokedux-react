import axios from "axios";

const api = 'https://pokeapi.co/api/v2/pokemon?limit=151'

const getPokemon = () =>{
    return axios.get(api)
        .then(res => res.data.results)
        .catch(err => console.log(err))
};

const getPokemonsDetails = (pokemon) =>{
    return axios.get(pokemon.url)
        .then(res => res.data)
        .catch(err => console.log(err))
};

export { getPokemon, getPokemonsDetails}