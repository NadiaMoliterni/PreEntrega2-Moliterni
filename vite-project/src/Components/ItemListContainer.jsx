import { useState, useEffect } from "react"
import productos from "../data/productos.json"
import ItemList from "./ItemList"

const ItemListContainer = () => {

  //const [productos, setProductos] = useState([]);

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      resolve(productos)
    })
  }

  useEffect(() => {
    
  pedirProductos()
  .then((respuesta) => {
    console.log(respuesta)
  })
  .catch((error) => {
      // Manejo de errores en caso de que la solicitud falle
      console.error("Error al obtener productos. Detalles del error:", error)
    })
    
    

  }), ([])
  

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
 

















// import React, { useState, useEffect } from "react"
// import ItemList from "./ItemList"
// //import Item from "./Item"

// function ItemListContainer() {
//   // Estados
//   const [productos, setProductos] = useState([]);

//   // Efectos
//   useEffect(() => {
    
//     // Realizar la solicitud a la API y obtener los productos
//     fetch("https://fakestoreapi.com/products")
//       .then((respuesta) => {

//         if (respuesta.status < 400) {
//           return respuesta.json()
//         } else {
//             console.log("termino el pedido mal")
//         }
//       })
//       .then((datos) => {
//         console.log({ productos: datos })
//         setProductos(datos)
//       })
//       .catch((error) => {
//         console.error("Error en la solicitud a la API:", error)
//       })
//   }, [])

//   // Vista
//   return <div>
//   <ItemList productos={productos} />
//   {/* {productos.map((producto) => (
//     <Item
//       key={producto.id}
//       name={producto.title}
//       image={producto.image}
//       price={producto.price}
//     />
//   ))} si lo muestro se ve doble los productos 
//  */}</div>
// }

// export default ItemListContainer 