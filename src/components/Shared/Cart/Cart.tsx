import * as S from './styles'
import {useState} from 'react'

export const Cart = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <S.CartBtn onClick={() => setIsOpen(true)}>
            <img src="/assets/cart.svg" alt="" />
            <div>0</div>
        </S.CartBtn>
        <S.CartContainer className={isOpen ? 'active' : ''}>
            <h1>Carrinho <br/> de Compras</h1>
            <S.CloseBtn onClick={() => setIsOpen(false)}>X</S.CloseBtn>
                
        </S.CartContainer>
        </>
    )
}