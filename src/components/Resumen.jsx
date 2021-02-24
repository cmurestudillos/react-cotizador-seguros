import React from 'react';
// Estilos CSS - Components
import styled from '@emotion/styled';
// Documentacion del componente 
import PropTypes from 'prop-types';
// Helpers
import { primerMayuscula } from '../helpers/helper';

//---------------------- componentes styles ---------------------//
const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;
//---------------------- componentes styles ---------------------//

const Resumen = ({datos}) => {

    // extraer de datos
    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '' ) return null;

    return ( 
        <ContenedorResumen>
            <h2>Resumen de Cotizaci&oacute;n</h2>
            <ul>
                <li>Marca: { primerMayuscula(marca) } </li>
                <li>Plan: {primerMayuscula(plan)} </li>
                <li>A&ntilde;o del Auto: {year} </li>
            </ul>
        </ContenedorResumen>
     );
}

// Definicion del componente "Resumen", que props se le pasan
Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen;