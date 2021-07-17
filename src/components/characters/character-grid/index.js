import React from 'react'
import CharacterItem from '../character-item'
import { CardGrid } from './CharacterGridElements'
import Spinner from '../../ui/spinner'

const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (
        <Spinner /> ) : 
    (
        <CardGrid>
            {items.map(item => (
                <CharacterItem item={item}></CharacterItem>
            ))}
        </CardGrid>
    )
}

export default CharacterGrid
