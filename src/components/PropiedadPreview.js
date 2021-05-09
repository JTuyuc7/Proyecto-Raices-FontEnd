import React from 'react';
import Iconos from './Iconos';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import urlSlug from 'url-slug';

const ImagenPropiedad = styled(GatsbyImage)`
    height: 300px;
    width: 600;
`;

const Card = styled.div`
    border: 1.5px solid #e1e1e1;
    img{
        width: 100%;
    }
`;

const Contenido = styled.div`
    padding: 2rem;

    h3{
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }

    .precio{
        font-size: 2rem;
        color: #75ab00;
    }
`;

const Boton = styled(Link)`
    display: block;
    background-color: #2dc246;
    padding: 1.2rem;
    text-decoration: none;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    
    &:hover{
        background-color: #00a10d;
    }
`;

const PropiedadPreview = ({propiedad}) => {

    //console.log(propiedad);

    const { nombre, precio, wc, estacionamiento, imagen, habitaciones, id  } = propiedad;

    const slug = urlSlug( nombre );

    return (  
        <>
            <Card>

                <ImagenPropiedad image={imagen.childImageSharp.gatsbyImageData} alt="Imagen Propiedad" />

                <Contenido>
                    <h3>{nombre}</h3>
                    <p className="precio">$ {precio}</p>

                    <Iconos 
                        estacionamiento={ estacionamiento }
                        habitaciones={ habitaciones }
                        wc={ wc }
                    />

                    <Boton to={slug} >Ver Detalles</Boton>
                </Contenido>
                
            </Card>
        </>
    );
}

export default PropiedadPreview;


/*
Espero no equivocarme, pero he notado que cada vez hablamos menos,
y espero que sea porque ahora todo este saliendo bien.

Decidi escribir esto por dos razones.

La primera, porque creo que estoy empezando a sentir algo mas por ti,
se que probablemente nunca siquiera fue tu intencion coquetear y perdon por confundir eso.

La segunda, he notado que ahora me respondes si, por compromiso y
no quiero que sea asi, de verdad eres una chica super linda, lo poco o mucho
que pude conocer de ti, me encanto y esa el la razon por la que se
que, puedes encontrar facilmente a mas amigos.

Pero se cuando debo retirarme para dejar que puedas seguir siendo feliz,
(no se si sea, muy maduro de mi parte hacer esto o no) pero tengo sentimientos
y a veces quisiera que las personas puedan hablar de ellos sin problema.

No quiero que respondas asi que bloqueare el chat, no quiero eliminarte de mis amigos,
talvez algun dia pueda volverte a escribir cuando pueda aclarar lo que siento por ti,
pero si tu lo quieres hacer esta bien.


*/