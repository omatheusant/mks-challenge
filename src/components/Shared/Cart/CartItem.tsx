import React, { useContext } from 'react'
import { AppContext } from "@/context/AppContext";
import { CItem } from "./styles"

export const CartItem = ({ data }) => {
    const { id, photo, name, price } = data;
    const { cartItems, setCartItems } = useContext(AppContext);
    const handleRemoveItem = () => { 
       const updatedItems = cartItems.filter((item) => id != item.id)
       setCartItems(updatedItems)
    }
    return (
            <CItem>
                <img src={photo} alt="product image" />
                <div>
                    <h3>{name}</h3>
                    <span>{price}</span>
                    <button type="button" onClick={handleRemoveItem}>X</button>
                </div>
            </CItem>
    )
}