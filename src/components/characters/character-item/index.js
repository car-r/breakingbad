import React from 'react'
import { Card, CardBack, CardBackItem, CardBackItemContainer, CardBackName, CardFront, CardImage, CardInner } from '../CharacterElements'

const CharacterItem = ({ item }) => {
    return (
        <Card>
            <CardInner>
                <CardFront>
                    <CardImage src={item.img} alt=''/>
                </CardFront>
                <CardBack>
                    <CardBackName>{item.name}</CardBackName>
                    <CardBackItemContainer>
                        <CardBackItem><strong>Actor Name:</strong></CardBackItem>
                        <CardBackItem>{item.portrayed}</CardBackItem>
                    </CardBackItemContainer>
                    <CardBackItemContainer>
                        <CardBackItem><strong>Nickname:</strong></CardBackItem>
                        <CardBackItem>{item.nickname}</CardBackItem>
                    </CardBackItemContainer>
                    <CardBackItemContainer>
                        <CardBackItem><strong>Birthday:</strong></CardBackItem>
                        <CardBackItem>{item.birthday}</CardBackItem>
                    </CardBackItemContainer>
                    <CardBackItemContainer>
                        <CardBackItem><strong>Status:</strong></CardBackItem>
                        <CardBackItem>{item.status}</CardBackItem>
                    </CardBackItemContainer>
                </CardBack>
            </CardInner>
            
        </Card>
    )
}

export default CharacterItem
