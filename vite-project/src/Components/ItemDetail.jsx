import React, { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({ item }) => {

  const { carrito, agregarAlCarrito } = useContext(CartContext)
  console.log(carrito)

  const [cantidad, setCantidad] = useState(1)

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }
  const handleSumar = () => {
    /* cantidad < item.stock &&  setCantidad(cantidad + 1)    //revisar q no funciona */
    setCantidad(cantidad + 1)   

  }


  return (
    <div className="container">
      <div className="card-container">
        <img className="card__image" src={item.image} alt={item.title} />
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Precio: ${item.price}</p>
          <p>{item.description}</p>
          <p>Categoria: {item.category}</p>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregarCarrito={() => { agregarAlCarrito(item, cantidad) }} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
