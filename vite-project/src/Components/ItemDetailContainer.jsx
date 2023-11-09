import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Define la función fetchDataProduct para obtener los detalles del producto
    const fetchDataProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("No se pudo obtener el producto");
        }
        const data = await response.json();
        setProduct(data); // Establece el producto obtenido en el estado
      } catch (error) {
        console.error("Error al obtener el producto", error);
      }
    };

    fetchDataProduct(); // Llama a fetchDataProduct para obtener el producto

  }, [id]); // Ejecuta el efecto cuando el ID cambia

  return (
    <div>
      {product ? (
        <ItemDetail item={product} />
      ) : (
        <p>Cargando el detalle del producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;


// import React, { useEffect, useState } from 'react'
// import ItemDetail from './ItemDetail'
// import { useParams } from 'react-router-dom'

// function ItemDetailContainer() {
//   const [productos, setProductos] = useState([])
//   const [carrito, setCarrito] = useState([])
//   const { id } = useParams()

//   const handleAgregarCarrito = (producto) => {
//     setCarrito([...carrito, producto])
//   }

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')

//       .then((respuesta) => respuesta.json())
//       .then((data) => setProductos(data))
//       console.log(productos)

//   }, [])

//   return (
//     <div>
//       {productos.map((producto) => (
//         <ItemDetail key={producto.id} item={producto} handleAgregarAlCarrito={handleAgregarCarrito} />
//       ))}
//     </div>
//   )
// }
// export default ItemDetailContainer
