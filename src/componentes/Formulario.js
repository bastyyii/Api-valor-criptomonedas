import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useMoneda from '../Hooks/useMoneda';
import useCripto from '../Hooks/useCripto';
import axios from 'axios';
import Error from './Error';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;
const Formulario = ({guardarMon, guardarCrip}) => {
    const [listacripto, guardarCripto] = useState([]);

    const [error, guardarError] = useState(false); 

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar USA'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'CLP', nombre: 'Peso chileno'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]
    const [state, Seleccionar] = useMoneda('Elige tu moneda: ', '', MONEDAS);
    
    const [criptomoneda, SelecCripto] = useCripto('Elige tu Criptomoneda: ', '', listacripto);
    
    useEffect(() => {
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);

            guardarCripto(resultado.data.Data);
        }
        consultarApi(); 
    }, []);
    
    const cotizar = e => {
        e.preventDefault();

        if(state === '' || criptomoneda === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarMon(state);
        guardarCrip(criptomoneda);
    }
    return ( 
        <form
            onSubmit={cotizar}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
            <Seleccionar/>

            <SelecCripto/>

            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;