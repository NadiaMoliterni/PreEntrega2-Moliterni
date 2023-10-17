import { useRef, useState } from "react"

function Formulario() {
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    console.log(inputRef.current.value)
    setInputValue(inputRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick} className="btn">Enviar</button>
      <p>{inputValue}</p>
    </div>
  )
}

export default Formulario