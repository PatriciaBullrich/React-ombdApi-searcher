import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';


export default function Buscador({search,submit, mostrarHistorial}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
    e.target.reset();
  }

  const handleSearch = (value) => {
    search(value);
  }
  
  
  
  return (
    <>
      <Form onSubmit={handleSubmit} className="mt-2">
        <Form.Row className="text-center">
          <Col md={12} className="my-1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control className="text-center campo"
            onChange={ e => handleSearch({nombre: e.target.value})}
            placeholder="titulo"/>
            <Form.Label>Año</Form.Label>
            <Form.Control className="text-center campo"
            onChange={e => handleSearch({year: e.target.value})}
            placeholder="año"/>
            <Form.Label>Tipo</Form.Label>
            <Form.Control className=' text-center campo'
              as="select"
              onChange={e => {
                handleSearch({tipo: e.target.value});
              }}
            >
          <option value="movie">Peliculas</option>
          <option value="series">Series</option>
          <option value="episode">Episodio</option>
          <option value="game">Juego</option>
          </Form.Control>
          </Col>
          <Col md={12} className="my-1 mt-2 text-center">
            <Button className='w-50' type="submit">Buscar</Button>
          </Col>
          <Col md={12} className="my-1 mt-4 text-center">
            <Button className='w-30 btn-secondary' type="button" onClick={mostrarHistorial}>Historial</Button>
          </Col>
        </Form.Row>
      </Form>
    </>
  )
}