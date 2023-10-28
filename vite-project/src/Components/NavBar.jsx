import CartWidget from "./CartWidget"
import { Link, useNavigate } from "react-router-dom"

const NavBar = (props) => {

    const navigate = useNavigate()

    return (
        <header className={"header"}>
            <Link to="/">
                <h1>
                    MatMoli
                </h1>
            </Link>

            <nav className="navbar-container">

                <Link to="/productos/category">Categorias</Link>
                <Link to="/cart">Carrito</Link>
                <Link to="/contact">Contacto</Link>

                <CartWidget />

            </nav>
        </header>
    )
}

export default NavBar