import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import BackgroundImage from 'gatsby-background-image';
import { convertToBgImage } from 'gbimage-bridge';
import styled from '@emotion/styled';

const ImangenBaner = styled(BackgroundImage)`
    height: 300px;
`;

const ContenidoImagen = styled.div`
    color: #fff;
    height: 100%;
    max-width: 1200px;
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3{
        font-size: 3rem;
        margin: 0;
        max-width: 900px;
        font-weight: bold;
    }

    p{
        margin: 2rem auto;
    }
`;

const Baner = () => {

    const { imagen } = useStaticQuery(graphql`
        query{
            imagen : file( relativePath: {eq: "encuentra.jpg"}){
                childImageSharp{
                    gatsbyImageData
                }
            }
        }
    `);

    const image = getImage( imagen );
    const bgImage = convertToBgImage ( image );

    return (  
        <>
            <ImangenBaner
                Tag="section"
                fadeIn="soft"
                { ...bgImage }
            >
                <ContenidoImagen>
                    <h3> La casa de tus sueños </h3>
                    <p>Mas de 20 años de experiencia en la busqueda de la casa de tus sueños.</p>
                    
                </ContenidoImagen>
            </ImangenBaner>
        </>
    );
}

export default Baner;


/*
    <GatsbyImage image={ image } alt="Imagen banner" />
*/