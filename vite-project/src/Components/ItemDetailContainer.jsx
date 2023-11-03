import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
  const [productos, setProductos] = useState([])
  const [carrito, setCarrito] = useState([])
  const { id } = useParams()

  const handleAgregarCarrito = (producto) => {
    setCarrito([...carrito, producto])
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((respuesta) => respuesta.json())
      .then((data) => setProductos(data))
  }, [])

  return (
    <div>
      {productos.map((producto) => (
        <ItemDetail key={producto.id} item={producto} handleAgregarAlCarrito={handleAgregarCarrito} />
      ))}
    </div>
  )
}
export default ItemDetailContainer
