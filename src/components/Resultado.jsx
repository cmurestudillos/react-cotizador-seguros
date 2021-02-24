import React from 'react';
// Estilos CSS - Components
import styled from '@emotion/styled';
// Libreria de animaciones
import { TransitionGroup, CSSTransition  } from 'react-transition-group';
// Documentacion del componente 
import PropTypes from 'prop-types';

//---------------------- componentes styles ---------------------//
const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color:  rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight:bold;
    margin: 0;
`;
//---------------------- componentes styles ---------------------//

const Resultado = ({cotizacion}) => {

    return (
        (cotizacion === 0) 
            ? <Mensaje>Elige marca, a&ntilde;o y tipo de seguro.</Mensaje> 
            :  
                (
                    <ResultadoCotizacion>
                        <TransitionGroup component="span" className="resultado" >
                            <CSSTransition classNames="resultado" key={cotizacion} timeout={{ enter: 500, exit: 500}}>
                                <TextoCotizacion>El total es: € <span> {cotizacion} </span>  </TextoCotizacion>
                            </CSSTransition>
                        </TransitionGroup>
                    </ResultadoCotizacion>
                )
    )
}

// Definicion del componente "Resultado", que props se le pasan
Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}


export default Resultado;