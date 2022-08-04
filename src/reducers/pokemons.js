import { SET_POKEMONS, SET_FAVORITE } from "../actions/types";

const initialState = {
    pokemons: []
};

export const pokemonsReducer = (state = initialState, action) => {   
    switch (action.type) {
        case SET_POKEMONS:
                return {...state, pokemons: action.payload}

        case SET_FAVORITE:
            const newPokemonList = [...state.pokemons];
            const currentPokemonIndex = newPokemonList.findIndex(pokemon => pokemon.id === action.payload)
            
            newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite

            if(currentPokemonIndex <= 0) return state

            return { ...state, pokemons: newPokemonList }
        default:
                return state
    }
};