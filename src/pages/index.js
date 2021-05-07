import React from 'react';
import Layout from '../components/Layout';
import UseInicio from '../hooks/usePaginas';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import Baner from '../components/Encuentra';
import ListadoPropiedades from '../components/ListadoPropiedades';

const ContenidoDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 90%;

  p{
    text-align: center;
    padding-bottom: 4rem;
  }
`;

const ImagenBackround = styled(BackgroundImage)`
  height: 600px;
`;

const ContenidoBg = styled.div`
  color: #fff;
  height: 100%;
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    font-size: 2rem;
    margin: 0;
    max-width: 900px;
    width: 90%;
    font-weight: bold;
  }

  @media( min-width: 768px){
    h1{
      font-size: 4.5rem;
    }
  }
`;

const IndexPage = () => {

  const datos = UseInicio();
  const { nombre, contenido, imagen } = datos[0];

  return(
    <>
      <Layout>
        <ImagenBackround
          tag="section"
          fadeIn="soft"
          fluid={imagen.childrenImageSharp[0].fluid}
        >
          <ContenidoBg>
            <h1>Las mejores Propiedades en el mercado</h1>
          </ContenidoBg>
        </ImagenBackround>

        <main>
          <ContenidoDiv>
            <h1>{nombre}</h1>

            <p>{contenido}</p>
          </ContenidoDiv>

        </main>

        <Baner />

        <ListadoPropiedades  />
      </Layout>
    </>
  )
}

export default IndexPage
