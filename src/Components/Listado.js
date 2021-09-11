import React from 'react'
import Pelicula from "./Pelicula"
import {Row} from 'react-bootstrap';
function Listado({peliculas, obtenerDetalle}) {
    return (
        <Row>
        {peliculas.map(pelicula =>(<Pelicula key={pelicula.imdbID} peli={pelicula} obtenerDetalle={obtenerDetalle}/>))}
        </Row>
    )
}

export default Listado
