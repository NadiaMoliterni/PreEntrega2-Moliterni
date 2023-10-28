import React from "react"

const ItemDetail = ({ item }) => {
    return (
        <div className="container">
            <div className="card-container">
                <img src={item.image} alt={item.title} />
                <div key={producto.id}>
                    <h2>{producto.title}</h2>
                    <p>Precio: ${producto.price}</p>
                    <p>{producto.description}</p>
                    <p>{producto.category}</p>

                </div>
            </div>
        </div>

    )
}
export default ItemDetail
