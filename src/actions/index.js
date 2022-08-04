import { getPokemonsDetails } from "../api";
import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "./types";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
});

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
})

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload
})

export const getPokemonsWithDetails = 
    (pokemonsList = []) => 
    async (dispatch) => {
        
    const pokemonDetails = await Promise.all(pokemonsList.map(pokemon => getPokemonsDetails(pokemon)));
    dispatch(setPokemons(pokemonDetails))
};