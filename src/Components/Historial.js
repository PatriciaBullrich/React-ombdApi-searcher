import React from 'react';
import {ListGroup, Modal,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash,faClock} from '@fortawesome/free-solid-svg-icons';
function Historial({show,handleClose,historial, verDetalle,verPelis ,borrarHistorial, borrarItem}) {
   
    const handleClick = peli => {
        if(peli.data) verPelis(peli.data);
        else verDetalle(peli)
    }
    
    const handleBorrar = () => {
        borrarHistorial();
    }
    const handleBorrarItem = id =>{
        borrarItem(id);
    }
    
    return (
        <Modal centered show={show} onHide={handleClose} animation={false}>
             <Modal.Header className='center'>
                <Modal.Title className='titulo-historial' >Historial</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <ListGroup>
                {historial.map(busqueda => (
                    <ListGroup.Item className="mt-2 item-historial" key={busqueda.Title}>{busqueda.Title} <FontAwesomeIcon className='icono' onClick={()=> handleClick(busqueda)} icon={faClock} /><FontAwesomeIcon  className="icono" onClick={()=>handleBorrarItem(busqueda.imdbID)} icon={faTrash}/></ListGroup.Item>
                    ))}
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            <Button variant="danger" onClick={handleBorrar}>
                Borrar Historial
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Historial
