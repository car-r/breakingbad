import React from 'react'
import logo from '../../../img/logo.png'
import { 
    HeaderContainer, 
    HeaderImage } 
from './HeaderElements'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderImage src={logo} alt='breaking-bad logo' />
        </HeaderContainer>
    )
}

export default Header
