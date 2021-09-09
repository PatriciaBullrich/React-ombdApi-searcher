import React from 'react'
import {Modal,Button} from "react-bootstrap";
function Detalle({show, datos, handleClose}) {
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{datos.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h5><strong>Genero:</strong> {datos.Genre}</h5>
        <h5><strong>Actores:</strong> {datos.Actors}</h5>
        <h5><strong>País:</strong> {datos.Country}</h5>
        <h5><strong>Metascore:</strong> {datos.Metascore}</h5>
        <h5><strong>Lenguaje:</strong> {datos.Language}</h5>
        <h5><strong>Trama:</strong> {datos.Plot}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default Detalle
