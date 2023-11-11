import React from 'react'
import { Link } from "react-router-dom"

const Item = ({ producto }) => {
  return (
    <div className="card-container">
      <img className="card__image" src={producto.image} alt={producto} />
      <div>
        <article className="card">
        <h2 className="card__title">{producto.title}</h2>
        <p>{producto.description}</p>
        <p>Precio: ${producto.price}</p>
        <p>Categoria: {producto.category}</p>
        <Link className="btn" to={`/item/${producto.id}`}>Ver más</Link>
        </article>
      </div>
    </div>
  )
}

export default Item