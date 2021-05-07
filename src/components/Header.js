import React from 'react';
import Navegacion from './Navegacion';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';

const HeaderDiv = styled.div`
    background-color: #16425c;
    padding: 1.5rem;
`;

const ContenedorHeader = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;

    h1{
        text-align: center;
        text-transform: uppercase;
        color: #fff;
    }

    @media( min-width: 768px){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const Header = () => {

    const data = useStaticQuery( graphql`
        query{
            file( relativePath: { eq: "logo.svg"}){
                publicURL
            }
        }
    `);

    const imagen = data.file.publicURL;

    return (  
        <>
            <HeaderDiv>
                <ContenedorHeader>
                    <Link to={'/'}> <img src={ imagen } alt="Imagen Logo" /> </Link>

                    <Navegacion />
                </ContenedorHeader>
            </HeaderDiv>
        </>
    );
}

export default Header;