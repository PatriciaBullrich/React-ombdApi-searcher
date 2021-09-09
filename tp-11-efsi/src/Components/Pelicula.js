import React from 'react'
import { Container, Row, Col, Card,Button } from 'react-bootstrap';

function Pelicula({peli,obtenerDetalle}) {
    const handleDetalle = () => {
        obtenerDetalle(peli.imdbID);
    }
    
    return (
        <Container className="mt-2">
        <Row>
          <Col xs={6} md={4}>
            <Card>
              <Card.Header>
                <h5>{peli.Title}</h5>
                <img src={peli.Poster} alt={peli.Title} />
              </Card.Header>
              <Card.Body>
                <h5><strong>Año:</strong> {peli.Year}</h5>
                <h5><strong>imdbID:</strong> {peli.imdbID}</h5>
                <h5><strong>Tipo:</strong> {peli.Type}</h5>
                <Button onClick={handleDetalle} variant="primary">Mas Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}

export default Pelicula
