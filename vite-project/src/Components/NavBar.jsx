const NavBar = () => {
    const id = "app-header"

    return (
        <>
            <header id={id} className={"header"}>
                <h1>Mate - Moli</h1>
                <nav className="navbar-container">
                    <a href="#">Productos</a>
                    <a href="#">Promociones</a>
                    <a href="#">Nosotros</a>
                    <a href="#">Contacto</a>
                </nav>
                <i></i>
            </header>
        </>
    )
}

export default NavBar