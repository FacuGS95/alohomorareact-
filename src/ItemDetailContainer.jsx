import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './components/ItemDetail'
import { products } from "./data/products";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const getProductById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(products.find(p => p.id === id)), 1000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [added, setAdded] = useState(false); 

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProductById(id).then(res => {
      setItem(res);
      setAdded(false); 
    });
  }, [id]);

  const handleAdd = (quantity) => {
    addToCart(item, quantity);
    setAdded(true); 
  };

  return (
    <div>
      {item ? (
        <ItemDetail product={item} onAdd={handleAdd} added={added} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
