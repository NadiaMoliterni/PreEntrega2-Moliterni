import CartWidget from "./CartWidget"
import { Link, useNavigate } from "react-router-dom"

const NavBar = (props) => {

    const navigate = useNavigate()

    return (
        <header className={"header"}>
            <Link to="/">
                <h1>{props.nombre}</h1>
            </Link>

            <nav className="navbar-container">

                <Link to="/women's clothing">Indumentaria Mujer</Link>
                <Link to="/men's clothing">Indumentaria Hombre</Link>
                <Link to="/cart">Carrito</Link>
                <Link to="/contact">Contacto</Link>

                <CartWidget />

            </nav>
        </header>
    )
}

export default NavBar