import React, {useState, Fragment} from 'react';
import {Label, Select} from '../styleComponent/sc_hook_usemoneda';

const useCriptomoneda = (label, stateInicial, opciones) => {
    //console.log(opciones);
    
    //State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);

    const SelectCripto = () => (
        <Fragment>
            <Label>{label} </Label>
            <Select
            onChange = {e => actualizarState(e.target.value)}
            value = {state}
            >
            <option value="">-- Seleccione --</option>
           {
                opciones.map(opcion => (
                    <option key= {opcion.CoinInfo.Id} value={opcion.CoinInfo.Name} >{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    );

    //Retornar state, interfaz y funcion que modifican el state

    return [state, SelectCripto, actualizarState];
}

export default useCriptomoneda;