import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const NavHeader = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
    padding-top: 2rem;

    @media(min-width: 768px){
        padding-bottom: 2;
    }
`;

const LinkPaginas = styled(Link)`
    color: #fff;
    text-decoration: none;
    padding: 1rem;
    font-size: 1.9rem;
    font-weight: bold;
    margin-right: 1rem;

    &:last-of-type{
        margin-right: 0;
    }

    &.pagina-actual{
        border-bottom: 2.5px solid #fff;
    }
`;

const Navegacion = () => {
    return (  
        <>
            <div>
                <NavHeader>
                    <LinkPaginas activeClassName="pagina-actual" to={'/'} >Inicio</LinkPaginas>
                    <LinkPaginas activeClassName="pagina-actual" to={'/propiedades'}>Propiedades</LinkPaginas>
                    <LinkPaginas activeClassName="pagina-actual" to={'/nosotros'}>Nosotros</LinkPaginas>
                </NavHeader>
            </div>
        </>
    );
}

export default Navegacion;