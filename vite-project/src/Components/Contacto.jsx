import React, { useState } from 'react'

const Contacto = () => {

    const [valores, setValores] = useState({
        nombre: "",
        email: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("enviado", valores)
    }

    const handleValores = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container">
            <h1>Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    value={valores.nombre}
                    onChange={handleValores}
                    name="nombre"
                />
                <input
                    type="email"
                    placeholder="Ingrese su email"
                    value={valores.email}
                    onChange={handleValores}
                    name="email"
                />
                <button type="submit" className="btn">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto
