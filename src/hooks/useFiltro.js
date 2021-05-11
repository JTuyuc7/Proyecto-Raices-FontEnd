import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const Formulario = styled.form`
    max-width: 1100px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    padding: 1rem;
    margin-top: 2rem;
    font-size: 2rem;
    justify-content: center;
    border: 1.5px solid #e1e1e1;
`;

const Select = styled.select`
    flex: 1;
    padding: 1rem;
    text-align: center;
    appearance: none;
    border: none;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
`;

const UseFiltro = () => {

    // State para el filtro
    const [ categoria, guardarCategoria ] = useState('');

    const resultado = useStaticQuery( graphql`
        query{
            allStrapiCategorias{
                nodes{
                    nombre
                    id
                }
            }
        }
    `);

    const categorias = resultado.allStrapiCategorias.nodes;

    const FiltroUi = () => (
        <Formulario>
            <Select
                onChange={ e => guardarCategoria(e.target.value)}
                value={ categoria }
            >
                <option className="opcion" value=""> -- Todas las Propiedades -- </option>
                { categorias.map( opcion => (
                    <option key={opcion.id} value={ opcion.nombre}>{opcion.nombre}</option>
                ))}
            </Select>
        </Formulario>
    )

    return {
        categoria,
        FiltroUi
    }
}

export default UseFiltro;