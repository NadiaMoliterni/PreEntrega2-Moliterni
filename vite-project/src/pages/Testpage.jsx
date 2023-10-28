/* import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Productos from "../productos.json"

function Testpage() {

  const [loading, setLoading] = useState(true)
  const [producto, setProducto] = useState({})
  const params = useParams()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      Productos.forEach(producto => {

        if (producto.id === parseInt(params.id)) {
          setProducto(producto)

        }
      })
    }, 2000);
  }, [])
  if (loading) {
    return <p>Cargando...</p>
  }
  return (
    <div>
      <h2>{producto.title}</h2>
    </div>
  )
}

export default Testpage */