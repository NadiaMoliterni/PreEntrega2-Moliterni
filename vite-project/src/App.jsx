import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import CartWidget from "./components/CartWidget"
import Footer from "./components/Footer"
import Contador from "./components/Contador"
import Formulario from "./components/Formulario"
import Container from "./components/Container"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemDetail from "./components/ItemDetail"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <CartWidget />

      <ItemListContainer
        greeting="Bienvenid@" />

      <Contador />

      <Formulario />

      <Footer />

      <Container />

      <ItemDetailContainer />

      <ItemDetail />

    </BrowserRouter>
  )
}

export default App