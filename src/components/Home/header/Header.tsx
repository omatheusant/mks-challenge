"use client"
import { Cart } from '@/components/Shared/Cart/Cart'
import * as S from './styles'

export const Header = () => {
    return (
        <S.Header data-testid="header">
            <S.Logo>TWS
                <span>Infoeletrônicos</span>
            </S.Logo>
            <Cart/>
        </S.Header>
    )
}