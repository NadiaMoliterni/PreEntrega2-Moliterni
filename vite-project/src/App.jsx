import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"
//import Contador from "./components/Contador"
//import Formulario from "./components/Formulario"
//import Container from "./components/Container"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer /> } />
        <Route path="/category/:id" element={<ItemListContainer /> } />
      
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App