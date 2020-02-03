import React from 'react';
import {MensajeError} from '../styleComponent/sc_error';
import PropTypes from 'prop-types';

const Error = ({mensaje}) => {
    return (
        <MensajeError>
            {mensaje}
        </MensajeError>
    )
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;
