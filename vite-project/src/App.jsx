import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import productos from "./data/productos.json"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        {/* <Route path="/category/:id" element={<ItemListContainer /> } /> */}
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:category" element={<ItemListContainer />} />
        {/* <Route path="/productos/:id" element={<ItemDetailContainer />} /> */}

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App