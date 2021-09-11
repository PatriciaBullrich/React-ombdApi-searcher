import React from 'react'
import {Col, Card,Button } from 'react-bootstrap';

function Pelicula({peli,obtenerDetalle}) {
    const handleDetalle = () => {
        obtenerDetalle(peli.imdbID);
    }
    
    return (
          <Col xs={6} md={3}>
            <Card border='secondary' className='mt-3 text-center'>
              <Card.Header>
              <Card.Title className='card-title'>{peli.Title}</Card.Title>
              </Card.Header>
              <Card.Img  className='cardImg' variant='top' src={peli.Poster}/>
              <Card.Body>
                <h5><strong>Año:</strong> {peli.Year}</h5>
                <h5><strong>imdbID:</strong> {peli.imdbID}</h5>
                <h5><strong>Tipo:</strong> {peli.Type}</h5>
                <Button onClick={handleDetalle} variant="primary">Mas Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
    )
}

export default Pelicula
