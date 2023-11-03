import React from 'react'
import { Link } from "react-router-dom"

const Item = ({ producto }) => {
  return (
    <div>
      <img src={producto.image} alt={producto} />
      <div>
        <h2>{producto.title}</h2>
        <p>{producto.description}</p>
        <p>${producto.price}</p>
        <p>${producto.category}</p>

        <Link to={`/item/${producto.id}`}>Ver más</Link>

      </div>
    </div>
  )
}

export default Item