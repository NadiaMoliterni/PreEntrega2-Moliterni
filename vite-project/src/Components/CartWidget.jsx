import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'

const CartWidget = () => {

    const { cantidadCarrito } = useContext(CartContext)
    const cantidad = isNaN(cantidadCarrito()) ? '0' : cantidadCarrito().toString();

    return (
        <div>
            <Link to="/carrito">
                Carrito
                <span className="numero">{cantidad}</span>
            </Link>
        </div>
    )
}

export default CartWidget
