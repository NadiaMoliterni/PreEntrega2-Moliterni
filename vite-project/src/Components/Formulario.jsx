import { useEffect } from "react";

const Formulario = () => {
  
  const addToCart = (event) => {
  }

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const handleSubmit = () => {
  }

  return (
    <div>
      <form onSubmit={() => console.log("submit")}>
      <input onChange={(e) => console.log(e)}/>
      <button type="submit">sub</button>
      </form>

</div>
  )
}

export default Formulario
