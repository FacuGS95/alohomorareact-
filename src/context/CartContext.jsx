import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const itemInCart = cart.find((item) => item.id === product.id);

    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart }}>
      {children}   
    </CartContext.Provider>
  );
}