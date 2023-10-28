/* import { Link } from "react-router-dom"

function Presentacional(props) {
  console.log(props)

  return (
    <section className="card-container">
      {props.productos.map((item) => {
        console.log(item)
        return (
          <article className="card" key={item.id}>
            <h2 className="card__title">{item.title} - ${item.price}</h2>
            <img className="card__image" src={item.image} alt={item.title} />
            <Link to={`${item.id}`} className="btn">Ver más</Link>
          </article>
        )
      })}
    </section>
  )
}

export default Presentacional */