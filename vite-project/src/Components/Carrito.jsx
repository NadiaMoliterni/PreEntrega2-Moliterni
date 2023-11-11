import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    return (
        <div className="container">
            <h1>Carrito</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <h3>{prod.title}</h3>
                        <p>Precio unitario: ${prod.price}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <p>Precio total: ${prod.price * prod.cantidad}</p>

                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                    <>
                        <h2>Precio Total: ${precioTotal()}</h2>
                        <button onClick={handleVaciar}>Vaciar carrito</button>
                    </> :
                    <h2>el carrito esta vacio</h2>
            }
        </div>
    )
}

export default Carrito