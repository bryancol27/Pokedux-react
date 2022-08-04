import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pokemons: [],
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload
        },
        setFavorite: (state, action) => {
            const newPokemonList = [...state.pokemons];
            const currentPokemonIndex = newPokemonList.findIndex(pokemon => pokemon.id === action.payload)
            
            newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite

            if(currentPokemonIndex >= 0) {
                state.pokemons = newPokemonList 
            }
        },
    }
});

export const { setPokemons, setFavorite } = dataSlice.actions;
console.log("🚀 ~ file: dataPokemonSlices.js ~ line 28 ~ dataSlice", dataSlice)

export default dataSlice.reducer