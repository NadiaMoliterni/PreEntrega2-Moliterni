import React from 'react'

const ItemDetail = ({ name, description, price, image }) => (
  <div className="item-detail">
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{description}</p>
    <p>Precio: ${price}</p>
  </div>
)

export default ItemDetail