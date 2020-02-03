import React from 'react';
import {MensajeError} from '../styleComponent/sc_error';

const Error = ({mensaje}) => {
    return (
        <MensajeError>
            {mensaje}
        </MensajeError>
    )
}

export default Error;
