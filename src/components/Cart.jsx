import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const handleClear = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    alert("Compra finalizada. ¡Gracias por tu pedido!");
    setCart([]);
  };

  const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  if (cart.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Carrito</h2>

   {cart.map((item) => (
  <div key={item.id} className="cart-item">
    <div className="cart-item-content">
      <img src={item.img} alt={item.name} className="cart-item-img" />

      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Precio: ${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
      </div>
    </div>
  </div>
))}

      <h3>Total: ${total}</h3>

      <div className="cart-buttons">
        <button onClick={handleClear}>Vaciar carrito</button>
        <button onClick={handleCheckout}>Finalizar compra</button>
      </div>
    </div>
  );
}

export default Cart;