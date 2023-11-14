"use client"
import { Cart } from '@/components/Shared/Cart/Cart'
import * as S from './styles'

export const Header = () => {
    return (
        <S.Header data-testid="header">
            <S.Logo>MKS
                <span>Sistemas</span>
            </S.Logo>
            <Cart/>
        </S.Header>
    )
}