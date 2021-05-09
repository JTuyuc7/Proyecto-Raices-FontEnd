import React from 'react';
import Iconos from '../components/Iconos';
import styled from '@emotion/styled';
import Layout from './Layout';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

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

const Sidebar = styled.aside`
    .precio{
        font-size: 2rem;
        color: #75ab00;
    }

    .agente{
        margin-top: 4rem;
        border-radius: 2rem;
        background-color: #75ab00;
        padding: 3rem;
        color: #fff;

        h2{
            font-weight: bold;
        }

        p{
            margin: 0;
        }
    }
`;

export const query = graphql`
    query($id: String!){
        allStrapiPropiedades(filter: { id: { eq: $id }}){
            nodes{
            id
            nombre
            descripcion
            habitaciones
            estacionamiento
            wc
            precio
            
            agentes{
                Nombre
                email
                telefono
            }
            
            categoria{
                nombre
            }
            
            imagen{
                    childImageSharp{
                    gatsbyImageData
                    }
                }
            }
        }
    }
`;

const Propiedad = ({ data }) => {

    const { nombre, descripcion, habitaciones, imagen, agentes, precio, wc, estacionamiento } = data.allStrapiPropiedades.nodes[0];

    return (  
        <>
            <Layout>

                <h1>{nombre}</h1>

                <DetallesDiv>
                    <main>
                        <GatsbyImage image={imagen.childImageSharp.gatsbyImageData} alt="Imagen Propiedad" />

                        <p>{descripcion}</p>
                    </main>

                    <Sidebar>
                        <p className="precio">Precio: $ {precio}</p>

                        <Iconos 
                            estacionamiento={ estacionamiento }
                            habitaciones={ habitaciones }
                            wc={ wc }
                        />

                        <div className="agente">
                            <h2>Vendedor: </h2>
                            <p>{agentes.Nombre}</p>
                            <p>Telefono: {agentes.telefono}</p>
                            <p>Email: {agentes.email}</p>
                        </div>
                    </Sidebar>
                </DetallesDiv>
            </Layout>
        </>
    );
}

export default Propiedad;

/*
Las ganas de ver el chat, imaginarme que soy correspondido
imaginarme que tienes algo que decirme, que me digas que
tambien piensas en mi, que hubo un sentimiento que tambien
nacio en ti, pero tengo miedo porque nunca lo demostraste,
asi que prefiero imaginarme que asi podria ser, aunque mi
mente sabe la respuesta. 
*/