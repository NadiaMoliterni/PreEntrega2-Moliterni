import CartWidget from "./CartWidget"
import { Link, useNavigate } from "react-router-dom"

const NavBar = () => {

    const navigate = useNavigate()

    return (
        <header className={"header"}>
            <Link to="/">
                <h1>
                    MatMoli
                </h1>
            </Link>

            <nav className="navbar-container">

                <Link to="/productos/women's%20clothing">Indumentaria Mujer</Link>
                <Link to="/productos/men's%20clothing">Indumentaria Hombre</Link>
                <Link to="/productos/electronics">Electronics</Link>
                <Link to="/productos/jewelery">Jewelery</Link>

                <Link to="/cart">Carrito</Link>
                <Link to="/contact">Contacto</Link>

                <CartWidget />

            </nav >
        </header >
    )
}

export default NavBar