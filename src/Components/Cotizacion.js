import React from 'react';
import {ResultadoDiv, Precio, Info} from '../styleComponent/sc_cotizacion';

const Cotizacion = ({resultado}) => {

    if (Object.keys(resultado).length === 0 ) return null;


    return (
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>Precio mas bajo del dia: <span>{resultado.LOWDAY}</span></Info>
            <Info>Precio mas alto del dia: <span>{resultado.HIGHDAY}</span></Info>
            <Info>Variacion ultimas 24hs: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima actualizacion: <span>{resultado.LASTUPDATE}</span></Info>
        </ResultadoDiv>
    )
}

export default Cotizacion;
