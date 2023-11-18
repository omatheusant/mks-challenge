import { createContext } from "react";

interface Props {
    products: never[],
    setProducts: React.Dispatch<React.SetStateAction<never[]>>,
    cartItems: never[],
    setCartItems: React.Dispatch<React.SetStateAction<never[]>>,
    


}

export const AppContext = createContext<Props>();