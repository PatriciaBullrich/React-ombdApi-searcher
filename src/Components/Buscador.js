import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';


export default function Buscador({search,submit, mostrarHistorial}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
    e.target.reset();
  }

  const handleSearch = (e) => {
    search(e.target.value);
  }
  
  
  
  return (
    <>
      <Form onSubmit={handleSubmit} className="mt-2">
        <Form.Row className="text-center">
          <Col md={12} className="my-1">
            <Form.Control className="text-center"
              onChange={handleSearch}
              placeholder="busca peliculas"/>
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