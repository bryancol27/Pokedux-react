import React from 'react';
import { useDispatch } from 'react-redux';

import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta'

//componente para volver favorito
import StartButton from './StartButton';

//ACTION TYPE
import { setFavorite } from '../actions/index'

const PokemonCard = ({ pokemon: { name, sprites, types, id, favorite } }) => {
    const typesString = types.map(element => element.type.name).join(', ')

    const dispatch = useDispatch();

    const handleOnFavorite = () => {
        dispatch(setFavorite(id))
    };

    return (
        <Card 
            extra={<StartButton isFavorite={favorite} onClick={handleOnFavorite}/>}
            title={name} 
            cover={<img src={sprites.front_default} alt={name}/>}
        >
            <Meta 
                description={typesString}
            />
        </Card>   
    )
};

export default PokemonCard
