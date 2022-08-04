import React from 'react'

import PokemonCard from './PokemonCard'
import '../components/PokemonList.css'

const PokemonList = ({ pokemones }) => {

    return (
        <div className='pokemonList'>
            {pokemones.map((pokemon => {
                return <PokemonCard key={pokemon.name} pokemon={pokemon}/>
            }))}
        </div>
    )
};

PokemonList.defaultProps = {
    pokemones: Array(10).fill(''),
};

export default PokemonList