"use client"
import { useState } from 'react'
import * as S from './styles'
 
export const Header = () => {
    const [cartCount, setCartCount] = useState(0)
    return (
        <S.Header data-testid="header">
            <S.Logo>MKS
                <span>Sistemas</span>
            </S.Logo>

            <S.CartBtn>
                <img src="/assets/cart.svg" alt="" />
                <div>{cartCount}</div>
            </S.CartBtn>
        </S.Header>
    )
}