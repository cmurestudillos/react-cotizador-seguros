import React from 'react';
// Estilos CSS - Components
import styled from '@emotion/styled';
// Documentacion del componente 
import PropTypes from 'prop-types';

//---------------------- componentes styles ---------------------//
const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;
//---------------------- componentes styles ---------------------//

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}

// Definicion del componente "Header", que props se le pasan
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;