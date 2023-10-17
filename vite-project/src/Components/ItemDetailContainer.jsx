import { Route, Routes } from "react-router-dom"
import Testpage from "../pages/Testpage"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<p>Home</p>} />
      <Route path="/women's clothing" element={<p>Indumentaria Mujer</p>} />
      <Route path="/men's clothing" element={<p>Indumentaria Hombre</p>} />
      <Route path="/cart" element={<p>Carrito</p>} />
      <Route path="/contact" element={<p>Contacto</p>} />
      <Route path="/detalle/:id" element={<Testpage />} />
      <Route path="*" element={<p>404 ERROR</p>} />
    </Routes>
  )
}

export default ItemDetailContainer