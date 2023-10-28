import { useEffect, useRef, useState } from "react"
import ProductList from "../components/ProductList"
function ProductListContainer() {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const promesa = fetch("https://fakestoreapi.com/products")

        promesa
            .then((res) => { return res.json() })
            .then((res) => {
                setProductos(res)
            })
        return () => {
            console.log("se desmonto el componente")
        }
    }, [])


    return (
        <div>
            <h1>Mate Moli</h1>
            <ProductList productos={productos} />
        </div>
    )

}
export default ProductListContainer