import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import {db} from "../firebaseConfig"

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const { category } = useParams()

  useEffect(() => {

    const productosRef = collection(db, "productos")
    const q = category ? query(productosRef, where("category", "==", category)) : productosRef

    getDocs(q)
    .then((resp) =>{

      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id}
        })
      )

    })

  }, [category])

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer



// import React, { useEffect, useState } from 'react'
// import ItemList from './ItemList'
// //import { useParams } from 'react-router-dom'
// import { app } from '../firebaseConfig'
// import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"


// function ItemListContainer() {
//   const [productos, setProductos] = useState([])

//   useEffect(() => {
//     const db = getFirestore(app)
//     const productosCollection = collection(db, "productos")
    
//     const filtro = query(productosCollection, where("category", "==", category ))
//     const consulta = getDocs(filtro)

//     consulta.then((resultado) => {

//       const productos = resultado.docs.map(doc => {
//         const id = doc.id
//         const data = doc.data()
//         data.id = id
//         return data
//       })
//       setProductos(productos)
//     }).catch((err) => {
//       console.log({ err })
//     })


//     return (
//       <div>
//         <ItemList productos={productos} />
//       </div>
//     )
//   }
//   )
// }
// export default ItemListContainer





// function ItemListContainer() {
//   const [productos, setProductos] = useState([])
//   const { category } = useParams()

//   useEffect(() => {


//     fetch('https://fakestoreapi.com/products')
//       .then((respuesta) => respuesta.json())
//       .then((data) => {
//         if (category) {
//           const productosFiltrados = data.filter((producto) => producto.category === category)
//           setProductos(productosFiltrados)
//         } else {
//           setProductos(data)
//         }
//       })
//   }, [category])

//   return (
//     <div>
//       <ItemList productos={productos} />
//     </div>
//   )
// }

// export default ItemListContainer
