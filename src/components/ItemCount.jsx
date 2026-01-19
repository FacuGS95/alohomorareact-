import { useState } from 'react'

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  return (
    <div>
      <button onClick={() => setCount(count - 1)} disabled={count <= 1}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)} disabled={count >= stock}>+</button>

      <button onClick={() => {
  console.log("CLICK EN BOTÓN, count =", count);
  onAdd(count);
}}>
  Agregar al carrito
</button>
    </div>
  )
}

export default ItemCount