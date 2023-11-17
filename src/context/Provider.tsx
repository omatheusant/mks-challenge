"use client"


import React, { ReactNode, useState } from 'react'
import { AppContext } from './AppContext'

interface ProviderProps {
    children: ReactNode
}
export function Provider ({ children }: ProviderProps ) {
    const [cartItems, setCartItems] = useState([])
    const [products, setProducts] = useState([])
    const value = {
        cartItems,
        setCartItems,
        products,
        setProducts
    }
    
    return (
        <AppContext.Provider value={ value }>
            {children}
        </AppContext.Provider>
    )
}