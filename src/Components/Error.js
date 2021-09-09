import React from 'react'
import {Alert} from 'react-bootstrap';
function Error(msg) {
    return <Alert variant='danger'>{msg}</Alert>
}

export default Error
