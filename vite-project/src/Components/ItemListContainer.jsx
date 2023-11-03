import { useState, useEffect } from "react"
import productos from "../data/productos.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [titulo, setTitulo] = useState("Productos")
  const category = useParams().category

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      resolve(productos)
    })
  }

  useEffect(() => {
    
  pedirProductos()
  .then((respuesta) => {
    if (category) {
      const productosFiltrados = respuesta.filter((prod) => prod.category === category)
      console.log("Productos filtrados:", productosFiltrados)
      setProductos(productosFiltrados)
      setTitulo(category)
    } else {
      console.log("Mostrar todos los productos")
      setProductos(respuesta)
      setTitulo("Productos")
    }
  })

  }, [category])
  
  return (
    <div>
      <ItemList productos={productos} titulo={titulo}/>
    </div>
  )

}

export default ItemListContainer
 