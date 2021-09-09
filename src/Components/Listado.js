import React from 'react'
import Pelicula from "./Pelicula"
function Listado({peliculas, obtenerDetalle}) {
    return (
        peliculas.map(pelicula =>(<Pelicula key={pelicula.imdbID} peli={pelicula} obtenerDetalle={obtenerDetalle}/>))
    )
}

export default Listado
