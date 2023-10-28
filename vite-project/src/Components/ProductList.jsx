import { useNavigate } from "react-router-dom"

export const ProductList = (props) => {

    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate("/detalle/1")
    }


  return (
    <section>
       {props.productos.map((producto) => {
        return (
            <article key={producto.id}>
                <h2>{producto.title}</h2>
                <img src={producto.image} alt="" />
                <p>{producto.description}</p>
                <p>{producto.price}</p>
                <button onClick={handleRedirect}>ver mas</button>
            </article>
        )
       })} 
    </section>
  )
}

export default ProductList