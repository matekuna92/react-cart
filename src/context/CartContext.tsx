import React, {useState} from "react";

type cartContextFormat = {
    cartItems: CartItem[],
    addToCart: () => void,
    removeFromCart: () => void,
    increaseCartQuantity: () => void,
    decreaseCartQuantity: () => void,
    cartQuantity: number,
    openCart: () => void,
    closeCart: () => void
}

export const CartContext = React.createContext<cartContextFormat>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    increaseCartQuantity: () => {},
    decreaseCartQuantity: () => {},
    cartQuantity: 0,
    openCart: () => {},
    closeCart: () => {}
});

const CartContextProvider: React.FC = (props) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
}

export default CartContextProvider;