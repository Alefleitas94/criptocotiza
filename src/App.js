import React, {useState, useEffect} from 'react';
import Formulario from './Components/Formulario';
import Cotizacion from './Components/Cotizacion';
import {Contenedor, Imagen, Heading} from './styleComponent/sc_app';
import imagen from './cryptomonedas.png';
import axios from 'axios';
import Spinner from './Components/Spinner';

function App() {

  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState ('');
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);


  useEffect (()=> {

   const cotizarCriptomoneda = async () => {

       //Evitamos la ejecucion la primera vez
     if (moneda === '') return; 
    
     //consultar la api para obtener la cotizacion
     const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
     
     const resultado = await axios.get(url);

     //Mostrar spinner
     guardarCargando(true);
     //ocultar el spinner y mostrar el resultado
     setTimeout(()=> {
       //cambiar el estado de guardarCargando
       guardarCargando(false);
         //guardar cotizacion
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
     }, 3000);
 
     

   }
      cotizarCriptomoneda();

  }, [moneda,criptomoneda])

//Mostrar spinner  o resultado

const componente = (cargando) ? <Spinner/> : <Cotizacion resultado = {resultado}/>

  return (
     <Contenedor>
        <div>
          <Imagen
            src= {imagen}
            alt="imagen cripto"
          />
        </div>
        <div>
          <Heading>Cotiza Criptomonedas al Instante</Heading>
          <Formulario

            guardarMoneda = {guardarMoneda}
            guardarCriptomoneda = {guardarCriptomoneda}
          />
          {componente}
        </div>
       
     </Contenedor>
  );
}

export default App;
