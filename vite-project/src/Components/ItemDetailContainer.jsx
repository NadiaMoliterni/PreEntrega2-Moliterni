import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchDataProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        if (!response.ok) {
          throw new Error("No se pudo obtener el producto")
        }
        const data = await response.json()
        setProduct(data)
            } catch (error) {
        console.error("Error al obtener el producto", error)
      }
    }

    fetchDataProduct()

  }, [id])

  return (
    <div>
      {product ? (
        <ItemDetail item={product} />
      ) : (
        <p>Cargando el detalle del producto...</p>
      )}
    </div>
  )
}

export default ItemDetailContainer

