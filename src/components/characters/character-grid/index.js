import React from 'react'
import CharacterItem from '../character-item'
import { CardGrid } from './CharacterGridElements'

const CharacterGrid = ({items}) => {
    return (
        <CardGrid>
            {items.map(item => (
                <CharacterItem item={item}></CharacterItem>
            ))}
        </CardGrid>
    )
}

export default CharacterGrid
