import NavBar from "./Components/NavBar"
import ItemListContainer from "./Components/ItemListContainer"
import CartWidget from "./Components/CartWidget"

function App() {

  return (
    <>
      <NavBar />

      <CartWidget />

      <ItemListContainer
        greeting="Bienvenid@" />

    </>
  )
}

export default App