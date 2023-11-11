

import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { app } from '../firebaseConfig';
import { getFirestore, collection, getDocs } from "firebase/firestore"

const db = getFirestore(app)
const productosCollection = collection (db, "productos")
const consulta = getDocs(productosCollection)
/*consulta.then((resultado) =>{
  console.log(resultado.docs[0])
  console.log(resultado.docs[0].id)
  console.log(resultado.docs[0].data())
})
consulta.catch((err) => {
  console.log({err})
})*/


function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((respuesta) => respuesta.json())
      .then((data) => {
        if (category) {
          const productosFiltrados = data.filter((producto) => producto.category === category)
          setProductos(productosFiltrados)
        } else {
          setProductos(data)
        }
      })
  }, [category])

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer