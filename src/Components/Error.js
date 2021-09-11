import React from 'react'
import {Alert} from 'react-bootstrap';
function Error({msg}) {
    return <Alert className='text-center' variant='danger'>{msg}</Alert>
}

export default Error
