import React from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap';


export default function Buscador(handleSearch,submit) {
  
  return (
    <Container>
      <Form className="mt-2">
        <Form.Row className="align-items-center">
          <Col sm={10} className="my-1">
            <Form.Control
              onChange={handleSearch}
              placeholder="busca peliculas"/>
          </Col>
          <Col sm={2} className="my-1">
            <Button block onClick={submit}>Search</Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  )
}