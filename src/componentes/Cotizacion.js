import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Parrafo = styled.p`
    font-size: 18px;

    span{
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size: 30px;
    span{
        font-weight: bold;
    }
`;
const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    console.log(resultado);
    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Parrafo>El precio mas alto del dia es: <span>{resultado.HIGHDAY}</span></Parrafo>
            <Parrafo>El precio mas bajo del dia es: <span>{resultado.LOWDAY}</span></Parrafo>
            <Parrafo>La variacion de las ultimas 24h es: <span>{resultado.CHANGEPCT24HOUR}</span> %</Parrafo>
            <Parrafo>La ultima actualizacion es: <span>{resultado.LASTUPDATE}</span></Parrafo>
        </ResultadoDiv>
     );
}
 
export default Cotizacion;