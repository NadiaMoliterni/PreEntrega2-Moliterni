import Item from "./Item"

const ItemList = ({ productos }) => {
  return (
    <div>

      <div>
        <h1>PRODUCTOS</h1> 
        {
          productos.length > 0 &&
          productos.map((producto) => {
            return (
              <Item key={producto.id} producto={producto}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default ItemList



/* import React from "react"
import Item from "./Item"

const ItemList = ({ products }) => (
  <div className="item-list">
    {products.map((product) => (
      <Item
        key={product.id}
        name={product.name}
        image={product.image}
        price={product.price}
      />
    ))}
  </div>
)

export default ItemList
 */

// import React from "react";
// import { Link } from "react-router-dom";
// import Item from "./Item"

// function ItemList(props) {
//   console.log(props);

//   return (
//     <section className="card-container">
//       {props.productos.map((item) => {
//         console.log(item);
//         return (
//           <article className="card" key={item.id}>
//             <h2 className="card__title">
//               {item.title} - ${item.price}
//             </h2>
//             <img className="card__image" src={item.image} alt={item.title} />
//             <Link to={`${item.id}`} className="btn">
//               Ver más
//             </Link>
//           </article>
//         )
//       })}
//     </section>
//   )
// }

// export default ItemList