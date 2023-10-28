import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
  const [productos, setProductos] = useState([])
  //const [id, setId] = useState(1)
  const id = useParams().id

  const handleAgregarCarrito = () => {
    setId(id + 1)

  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((respuesta) => {
        respuesta.json()
      })
      .then((data) => {
        setProductos(data)
      })


  }, [id])

  return (
    <ItemDetail productos={productos}/>
  )
}

export default ItemDetailContainer