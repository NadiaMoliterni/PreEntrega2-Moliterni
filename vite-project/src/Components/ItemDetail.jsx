import React from "react"

const ItemDetail = ({ item, handleAgregarAlCarrito }) => {

  return (
    <div className="container">
      <div className="card-container">
        <img className="card__image" src={item.image} alt={item.title} />
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Precio: ${item.price}</p>
          <p>{item.description}</p>
          <p>Categoria: {item.category}</p>
          <button onClick={() => handleAgregarAlCarrito(item)}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
