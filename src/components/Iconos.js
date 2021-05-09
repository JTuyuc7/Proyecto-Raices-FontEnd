import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const ListadoIconos = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li{
        display: flex;
        img{
            margin-right: 1rem;
        }
    }
`;

const Iconos = ({ estacionamiento, habitaciones, wc }) => {

    const { iconos } = useStaticQuery(graphql`
        query{
            iconos: allFile( filter: { relativeDirectory : { eq: "iconos"}}){
                edges{
                    node{
                        id
                    publicURL
                    }
                }
            }
        }
    `);

    //console.log(iconos)

    const imagenIcono = iconos.edges;

    return (  
        <>
            <ListadoIconos>
                <li>
                    <img src={ imagenIcono[0].node.publicURL } alt="Imagen wc" />
                    <p>{estacionamiento}</p>
                </li>

                <li>
                    <img src={ imagenIcono[1].node.publicURL } alt="Imagen Habitacion" />
                    <p>{habitaciones}</p>
                </li>

                <li>
                    <img src={ imagenIcono[2].node.publicURL} alt="Imagen Estacionamiento" />
                    <p> { wc } </p>

                </li>
            </ListadoIconos>
        </>
    );
}

export default Iconos;



/*

No se como empezar, y para que no se mucho texto ire al grano,
sabes que eres una chica muy linda, y no se cuando pase la linea
de verte como una amiga y creo que empece a sentir algo mas que eso,
desde hace un par de dias, se que es algo estupido porque nisiquiera te 
conozco bien, quiza sea porque nadia me habia hablado (para mi bonito) y 
talvez tu solo estabas siendo amable conmigo, por eso te pido perdon,
se que empezaste a hablar conmigo porque estabas pasando un mal momento 
con tu novio, y aprecio que hayas abierto un poco de tu corazon para mi,
pero creo que todo ha mejorado entre tu novio y tu, y me alegro por eso,
pero no puedo y no quiero seguir pensando mas en ti, se que tienes cosas 
mas importantes que hacer y personas mas importantes con quien compartir,
y fue bonito haber platicado contigo estos dias, pero soy un estupido,
porque confundi la amistad que me ofreciste porque no se diferenciar si 
alguien esta siendo amable o esta coqueteando conmigo, se que no fue tu intencion.

Pero se, y probablemente no lo aceptes, pero ahora me respondes por compromiso,
y no quiero que te sientas incomoda con eso, y creo dejarte de hablar es lo 
mejor para ti y para mi, porque no puedo dejar de pensar en ti, y probablemente sea gracioso para ti
porque nunca siquiera fue tu intencion conquetear conmigo, pero asi de pendejo estoy con cosas del corazon,
y te preguntaras si asi soy con cualquier mujer, y no la verdad no he tenido amigas que sean
tan bonitas como tu.

Para terminar 2 cosas.
1. Espero que de verdad puedas ser feliz, y que almenos puedas recordarme en algunos años,
como alguien bueno conociste.

2. Y creo que lo mejor sera bloquear el chat, para que no te sientas obligada a responder 
y tambien porque no quiero saber la respuesta de algo que es obvio.

Y perdon por mucho texto.



No sé cómo empezar, y para que no sé mucho texto iré al grano,
sabes que eres una chica muy linda, y no sé cuando pase la línea
de verte como una amiga y creo que empece a sentir algo más que eso,
desde hace un par de días, sé que es algo estúpido porque ni siquiera te 
conozco bien, quizá sea porque nadie me había hablado (para mi bonito) y 
talvez tu solo estabas siendo amable conmigo, por eso te pido perdón,
se que empezaste a hablar conmigo porque estabas pasando un mal momento 
con tu novio, y aprecio que hayas abierto un poco de tu corazón para mí,
pero creo que todo ha mejorado entre tu novio y tú, y me alegro por eso,
pero no puedo y no quiero seguir pensando más en ti, sé que tienes cosas 
más importantes que hacer y personas más importantes con quien compartir,
y fue bonito haber platicado contigo estos días, pero soy un estúpido,
porque confundí la amistad que me ofreciste porque no sé diferenciar si 
alguien está siendo amable o está coqueteando conmigo, sé que no fue tu intención.

Pero sé, y probablemente no lo aceptes, pero ahora me respondes por compromiso,
y no quiero que te sientas incómoda con eso, y creo dejarte de hablar es lo 
mejor para ti y para mí, porque no puedo dejar de pensar en ti, y probablemente sea gracioso para ti
porque nunca siquiera fue tu intención coquetear conmigo, pero así de pendejo estoy con cosas del corazón,
y te preguntarás si así soy con cualquier mujer, y no la verdad no he tenido amigas que sean
tan bonitas como tú.

Para terminar 2 cosas.
1. Espero que de verdad puedas ser feliz, y que al menos puedas recordarme en algunos años,
como alguien bueno conociste.

2. Y creo que lo mejor será bloquear el chat, para que no te sientas obligada a responder 
y también porque no quiero saber la respuesta de algo que es obvio. (que estoy bien pendejo con cosas del corazón)

Y perdón por mucho texto.



*/