import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore"
import { app } from "../firebaseConfig";

import { db } from "../firebaseConfig"
function ItemDetailContainer() {

  // const { id } = useParams()
  // const [product, setProduct] = useState(null)
  const [producto, setProducto] = useState({})

  const [item, setItem] = useState(null)
  const id = useParams().id

  useEffect(() => {

    const db = getFirestore(app)
    const productosCollection = collection(db, "productos")

    const docRef = doc(productosCollection, "")
    const consulta = getDoc(docRef)
    
    consulta
    .then((resultado)=> {
      const producto = resultado.data()
      producto.id = resultado.id
      setProducto(producto)
    })
    .catch((err) => {
      console.log(err)
    })

    // const docRef = doc(db, "productos", id)
    // getDoc(docRef)
    //   .then((resp) => {
    //     setItem(
    //       { ...resp.data(), id: resp.id }
    //     )

    //   })



    // const fetchDataProduct = async () => {
    //   try {
    //     const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    //     if (!response.ok) {
    //       throw new Error("No se pudo obtener el producto")
    //     }
    //     const data = await response.json()
    //     setProduct(data)
    //         } catch (error) {
    //     console.error("Error al obtener el producto", error)
    //   }
    // }

    // fetchDataProduct()

  }, [id])

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
    // <div>
    //   {product ? (
    //     <ItemDetail item={product} />
    //   ) : (
    //     <p>Cargando el detalle del producto...</p>
    //   )}
    // </div>
  )
}

export default ItemDetailContainer

















// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ItemDetail from "./ItemDetail";
// import { doc, getDoc } from "firebase/firestore"
// import { db } from "../firebaseConfig"
// function ItemDetailContainer() {

//   const [item, setItem] = useState(null)
//   const id = useParams().id

//   useEffect(() => {

//     const docRef = doc(db, "productos", id)
//     getDoc(docRef)
//       .then((resp) => {
//         setItem(
//           { ...resp.data(), id: resp.id }
//         )

//       })

//   }, [id])

//   return (
//     <div>
//       {item && <ItemDetail item={item} />}
//     </div>
//   )
// }

// export default ItemDetailContainer