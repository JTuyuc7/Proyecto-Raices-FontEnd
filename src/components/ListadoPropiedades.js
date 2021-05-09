import React, { useEffect, useState } from 'react';
import UsePropiedades from '../hooks/usePropiedades';
import UseFiltro from '../hooks/useFiltro';
import PropiedadPreview from './PropiedadPreview';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ListaPropiedades = styled.ul`
    max-width: 1200px;
    width: 90%;
    margin: 4rem auto 4rem;

    @media( min-width: 480px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
        row-gap: 3rem;

    }

    @media(min-width: 768px){
        grid-template-columns: repeat(3, 1fr);
        column-gap: 2rem;
        row-gap: 3rem;
    }
`;

const ListadoPropiedades = () => {

    const resultado = UsePropiedades();
    const [ propiedades, guardarPropiedades ] = useState([]);

    // Filtrado de las propiedades
    const { FiltroUi } = UseFiltro();

    useEffect(() => {
        guardarPropiedades(resultado);
    }, []);

    return (  
        <>
            <h2
                css={ css`
                    margin-top: 3rem;
                `}
            >Nuestras Propiedades</h2>

            { FiltroUi() }

            <ListaPropiedades>
                { propiedades.map( propiedad => (
                    <PropiedadPreview
                        propiedad={propiedad}
                        key={propiedad.id}
                    />
                ))}
            </ListaPropiedades>
        </>
    );
}

export default ListadoPropiedades;