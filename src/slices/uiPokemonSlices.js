import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: true
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers:{
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
});

export const { setLoading } = uiSlice.actions
console.log("🚀 ~ file: uiPokemonSlices.js ~ line 18 ~ uiSlice", uiSlice)

export default uiSlice.reducer 