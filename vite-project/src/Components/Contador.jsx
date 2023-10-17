import { useState } from "react"

function Contador() {
  //estados
  const [contador, setContador] = useState(0)

  //acciones (metodos)
  const handleSumar = () => {
    setContador(contador + 1)
  }
  const handleRestar = () => {
    if (contador > 1) {
      setContador(contador - 1)
    }
  }
  const handleResetear = () => {
    setContador(1)
  }

  //render (vista)
  return (
    <div>
      <p>Contador Actual: {contador}</p>
      <button onClick={handleSumar} className="btn">Sumar</button>
      <button onClick={handleRestar} className="btn">Restar</button>
      <button onClick={handleResetear} className="btn">Resetear</button>
    </div>
  )
}

export default Contador