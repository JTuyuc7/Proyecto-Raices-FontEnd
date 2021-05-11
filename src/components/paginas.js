import React from 'react';
import Layout from './Layout';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import ListadoPropiedades from './ListadoPropiedades';

const DetallesDiv = styled.div`
    max-width: 1100px;
    width: 90%;
    margin: 0 auto 4rem auto;

    @media(min-width: 768px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

export const query = graphql`
    query( $id: String!){
        allStrapiPaginas( filter: { id:  { eq: $id }}){
            nodes{
                id
                nombre
                contenido
                imagen{
                        childImageSharp{
                            gatsbyImageData
                    }
                }
            }
        }
    }
`;

const Paginas = ({ data }) => {

    const { nombre, contenido, imagen } = data.allStrapiPaginas.nodes[0];
    console.log(imagen);

    return (  
        <>
            <Layout>
                <main>
                    <h1>{nombre}</h1>
                    <DetallesDiv>
                        <GatsbyImage image={ imagen.childImageSharp.gatsbyImageData} alt="Imagen Pagina" />

                        <p>{contenido}</p>
                    </DetallesDiv>

                    { nombre === 'Propiedades' && (
                        <ListadoPropiedades />
                    )}
                </main>
            </Layout>
        </>
    );
}

export default Paginas;