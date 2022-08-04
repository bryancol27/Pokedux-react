//import css and UI
import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import "./App.css";
import { Col, Spin } from "antd";

//import components
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList.jsx";

//img logo import
import logo from "./static/logo.svg";

//import actions to change UI
// import { setFetchPokemonsWithDetails } from "./slices/dataPokemonSlices";
import { setLoading } from "./slices/uiPokemonSlices";
import { getPokemon, getPokemonsDetails } from "./api";
import { setPokemons } from "./slices/dataPokemonSlices";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {

    const fetchPokemons = async () => {
      const pokemonRes =  await getPokemon();
      const pokemonDetails = await Promise.all(pokemonRes.map(pokemon => getPokemonsDetails(pokemon)));
      
      dispatch(setPokemons(pokemonDetails));
      dispatch(setLoading(false))
      
    }

    
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>

      <Col span={8} offset={8}>
        <Searcher />
      </Col>

      {loading ? (
        <Col span={12} offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemones={pokemons} />
      )}
    </div>
  );
}

export default App;
