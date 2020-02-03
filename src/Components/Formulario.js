import React, {useEffect, useState} from 'react';
import Error from './Error'; 
import {Boton} from '../styleComponent/sc_formulario';
import axios from 'axios';

//Hooks
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';



const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {


    //State del listado de criptomonedas
    const [listacripto, guardarCripto] = useState([]);
    const [error, guardarError] = useState(false);

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar de los Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]

    //Utilizar useMOneda
    const [moneda, SelectMonedas, actualizarState] = useMoneda('Elige tu moneda', '', MONEDAS);

   //Utilizar useCriptomoneda
   const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu criptomoneda', '', listacripto);

   //Ejecutar llamado a la API
   useEffect(()=> {
    const consultarAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const resultado = await axios.get(url);
        guardarCripto(resultado.data.Data);
    }
    consultarAPI();
   }, []);

   //cuando el usuario hace submit
   const cotizarMoneda = e => {
       e.preventDefault();

        //Validar si ambos campos estan llenos
        if (moneda.trim() === '' || criptomoneda.trim() === ''){
            guardarError(true);
            return;

        }
        //pasar los datos al componente principal
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
   }


    return (
        <form
        onSubmit = {cotizarMoneda}
        >
        {error ? <Error mensaje="Todos los campos son obligatorios"/> :null}
        <SelectMonedas/>
        <SelectCripto/>
            <Boton
                type= "submit"
                value="Calcular"
            />
        </form>
    )
}

export default Formulario;
