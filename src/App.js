import React, { useState } from 'react';
// Componentes
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner/Spinner';
// Estilos CSS - Components
import styled from '@emotion/styled';

//---------------------- componentes styles ---------------------//
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;
//---------------------- componentes styles ---------------------//

function App() {

  const [ resumen, guardarResumen] = useState({
      cotizacion: 0,
      datos: {
        marca: '',
        year: '',
        plan: ''
      }
  });

  const [ cargando, guardarCargando] = useState(false);

  // extraer datos
  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
        <Header titulo='Cotizador de Seguros'/>
        <ContenedorFormulario>
            <Formulario guardarResumen={guardarResumen} guardarCargando={guardarCargando} />
            { cargando ? <Spinner /> : null }
            <Resumen datos={datos} />
            { !cargando  
              ?<Resultado cotizacion={cotizacion} />
              : null
            }
        </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
