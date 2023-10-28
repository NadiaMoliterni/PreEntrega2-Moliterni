/*import { useState, useEffect } from "react"
import Presentacional from "./Presentacional"
import { getProductos } from "../utils"

function Container() {
  //estados
  const [productos, setProductos] = useState([])

  //efectos
  useEffect(() => {
    const resultado = getProductos()
    resultado.then(productos => {
      console.log({ productos })
      setProductos(productos)
    })

  }, [])

  //vista
  return (
    <Presentacional productos={productos} />
  )
}

export default Container*/