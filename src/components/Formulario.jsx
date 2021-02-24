import React, { useState } from 'react';
// Estilos CSS- Components
import styled from '@emotion/styled';
// Documentacion del componente 
import PropTypes from 'prop-types';
// Helpers
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../helpers/helper';

//---------------------- componentes styles ---------------------//
const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width:100%;
    text-align: center;
    margin-bottom: 2rem;
`;
//---------------------- componentes styles ---------------------//

const Formulario = ({guardarResumen, guardarCargando}) => {

    const [ datos, guardarDatos ] = useState({
        marca: '',
        year: '',
        plan: ''
    });
    const [ error, guardarError ] = useState(false);

    // extraer los valores del state
    const { marca, year, plan } = datos;

    // Leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    // Cuando se envia el formulario
    const cotizarSeguro = e => {
        e.preventDefault();

        // Validacion del formulario
        if(marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        // Una base de 2000
        let resultado = 2000;

        // obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(year);

        // por cada año hay que restar el 3%
        resultado -= (( diferencia * 3 ) * resultado) / 100;

        // Americano 15
        // Asiatico 5%
        // Europeo 30%
        resultado = calcularMarca(marca) * resultado;

        // Basíco aumenta 20% / Completo 50%
        const incrementoPlan = obtenerPlan(plan);
        resultado = parseFloat( incrementoPlan * resultado ).toFixed(2);

        // Muestra Spinner una vez cargado
        guardarCargando(true);

        // Oculta el spinner y muestra los datos
        setTimeout(() => {
            // Elimina el spinner
            guardarCargando(false);
            // pasa la información al componente principal
            guardarResumen({
                cotizacion: Number(resultado),
                datos
            });
        }, 3000);
    }

    return ( 
        <form onSubmit={cotizarSeguro} >
            { error ? <Error>Todos los campos son obligatorios</Error>  : null }
            <Campo>
                <Label htmlFor="marca">Marca</Label>
                <Select id="marca" name="marca" value={marca} onChange={obtenerInformacion} >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label htmlFor="ano">A&ntilde;o</Label>
                <Select id="ano" name="year" value={year} onChange={obtenerInformacion} >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label htmlFor="plan">Plan</Label>
                <InputRadio id="plan" type="radio" name="plan" value="basico" checked={plan === "basico"} onChange={obtenerInformacion} /> B&aacute;sico
                <InputRadio id="plan" type="radio" name="plan" value="completo" checked={plan === "completo"} onChange={obtenerInformacion} /> Completo
            </Campo>
            <Boton type="submit">Cotizar</Boton>
        </form>
     );
}

// Definicion del componente "Formulario", que props se le pasan
Formulario.propTypes = {
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}
 
export default Formulario;