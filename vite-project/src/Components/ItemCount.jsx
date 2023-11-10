import React from 'react'

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregarCarrito }) => {


    return (

        <div>
            <div className="item-count">
                <button className="btn" onClick={handleRestar}>-</button>
                <p>{cantidad}</p>
                <button className="btn" onClick={handleSumar}>+</button>

            </div>
            <button className="btn" onClick={handleAgregarCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount