import React, {Fragment, useState} from 'react';
import {Label, Select} from '../styleComponent/sc_hook_usemoneda';

const useMoneda = (label, stateInicial, opciones) => {
    
    //State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <Label>{label} </Label>
            <Select
            onChange = {e => actualizarState(e.target.value)}
            value = {state}
            >
            <option value="">-- Seleccione --</option>
                {opciones.map(opcion => (
                    <option key= {opcion.codigo} value={opcion.codigo} >{opcion.nombre}</option>
                ))}
            </Select>
        </Fragment>
    );

    //Retornar state, interfaz y funcion que modifican el state

    return [state, Seleccionar, actualizarState];
}

export default useMoneda;
