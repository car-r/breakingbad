import styled from "styled-components";

export const Card = styled.div`
    cursor: pointer;
    background-color: transparent;
    height: 300px;
    perspective: 1000px;
`


export const CardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    &:hover {
        transform: rotateY(180deg);
    }
`


export const CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`

export const CardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #333;
    color: white;
    padding: 20px;
    transform: rotateY(180deg);
`

export const CardImage = styled.img`
    width: 250px;
    height: 300px;
    object-fit: cover;
`

export const CardBackName = styled.p`
    font-size: 1.5rem;
    margin-bottom: 1.5em;
`

export const CardBackItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
    border-bottom: 1px solid white;
    margin-bottom: .75em;
`

export const CardBackItem = styled.p`
    font-size: 1rem;
    margin-bottom: .75em;
    
`