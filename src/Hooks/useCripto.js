import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 2rem;
`;

const Select = styled.select`
    width: 100%;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;
const useCripto = (label, stateInicial, opciones) => {

    const [state, actualizarState] = useState(stateInicial);
    const SelecCripto = () => {
        return(
            <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">-- Selecciones --</option>
                 {opciones.map(opcion => (
                    <option key={opcion.CoinInfo.id} value={opcion.CoinInfo.Internal}>{opcion.CoinInfo.FullName}</option>
                ))} 
            </Select>
        </Fragment>
        )
    }
    //Retornar state, interfaz y fn que modifica el state
    return[state, SelecCripto, actualizarState];
}

export default useCripto;