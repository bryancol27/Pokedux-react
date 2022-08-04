import { combineReducers } from 'redux';
// import { pokemonsReducer } from './pokemons';
import dataSlice from '../slices/dataPokemonSlices';
import uiPokemonSlices from '../slices/uiPokemonSlices';

const rootReducer = combineReducers({
    data: dataSlice,
    ui: uiPokemonSlices
});

export default rootReducer