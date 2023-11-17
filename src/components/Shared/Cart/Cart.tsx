import { AppContext } from '@/context/AppContext'
import * as S from './styles'
import React, { useState, useContext } from 'react'
import { CartItem } from './CartItem'

export const Cart = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { cartItems } = useContext(AppContext);
    // const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0)

    return (
        <>
            <S.CartBtn onClick={() => setIsOpen(true)}>
                <img src="/assets/cart.svg" alt="" />
                <div>{cartItems.length}</div>
            </S.CartBtn>
            <S.CartContainer className={isOpen ? 'active' : ''}>
                <h1>Carrinho <br /> de Compras</h1>
                {
                    cartItems.map((cartItem, index) => <CartItem key={index} data={{
                        price: cartItem.price,
                        name: cartItem.name,
                        photo: cartItem.photo,
                        id: cartItem.id
                        
                    }}/>
                    )
                }
                {/* <span>{totalPrice}</span> */}
                <S.BuyButton>Finalizar Compra</S.BuyButton>
                <S.CloseBtn onClick={() => setIsOpen(false)}>X</S.CloseBtn>
            </S.CartContainer>
        </>
    )
}