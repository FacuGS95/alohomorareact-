import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { products } from "../data/products";


const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(products), 1000)
  })
}

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    getProducts().then(res => {
      if (categoryId) {
        setItems(res.filter(prod => prod.category === categoryId))
      } else {
        setItems(res)
      }
    })
  }, [categoryId])

  return (
    <>
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </>
  )
}

export default ItemListContainer