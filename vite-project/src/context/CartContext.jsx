import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState(carritoInicial)

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad }
        const nuevoCarrito = [...carrito]
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad
        } else {
            nuevoCarrito.push(itemAgregado)
        }
        setCarrito(nuevoCarrito)
    }

    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
        const total = carrito.reduce((accumulator, prod) => {
          const price = Number(prod.price)
          const cantidad = Number(prod.cantidad)
          const subtotal = price * cantidad
          return isNaN(subtotal) ? accumulator : accumulator + subtotal
        }, 0)
      
        return total
      }
      
    // const precioTotal = () => {
    //     return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
    // }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))

    }, [carrito])

    return (
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            cantidadCarrito,
            precioTotal,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}