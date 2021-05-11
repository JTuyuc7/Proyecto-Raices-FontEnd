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

    const resultado = UsePropiedades();                       // Hook para la consulta de todas las propiedades
    const [ propiedades ] = useState(resultado);              // Satate donde se asigna todas las propiedades del hook
    const [ filtradas, guardarFiltradas ] = useState([]);     // Nuevo state que almacenara las propiedades filtradas

    // Filtrado de las propiedades y objeto del filtro
    const { categoria, FiltroUi } = UseFiltro();

    useEffect(() => {
        if( categoria ){
            const filtro = propiedades.filter( propiedad => propiedad.categoria.nombre === categoria );
            guardarFiltradas( filtro );
        } else {
            guardarFiltradas( propiedades );
        }
    }, [ categoria ]);

    return (  
        <>
            <h2
                css={ css`
                    margin-top: 3rem;
                `}
            >Nuestras Propiedades</h2>

            { FiltroUi() }

            <ListaPropiedades>
                { filtradas.map( propiedad => (
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