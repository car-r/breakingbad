import React from 'react'
import { Card, CardImage } from '../CharacterElements'

const CharacterItem = ({ item }) => {
    return (
        <Card>
            <CardImage src={item.img} alt=''/>
        </Card>
    )
}

export default CharacterItem
