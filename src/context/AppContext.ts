import { createContext } from "react";

interface Props {
    products: object[],
    setProducts: React.Dispatch<React.SetStateAction<object[]>>,
    cartItems: object[],
    setCartItems: React.Dispatch<React.SetStateAction<object[]>>,
}

export const AppContext = createContext<Props>();