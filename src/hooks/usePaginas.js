import { graphql, useStaticQuery } from 'gatsby';

const UseInicio = () => {

    const data = useStaticQuery( graphql`
        query{
            allStrapiPaginas(filter: { nombre : { eq: "Inicio"}}){
                nodes{
                    id
                    nombre
                    contenido
                    imagen{
                        childrenImageSharp{
                            fluid( duotone: {
                                highlight: "#222222", shadow: "#192550", opacity: 30
                            }){
                                srcSetWebp
                            }
                        }
                    }
                }
            }
        }
    `);

    //console.log(data.allStrapiPaginas.nodes);

    return data.allStrapiPaginas.nodes.map( inicio => ({
        nombre: inicio.nombre,
        contenido: inicio.contenido,
        imagen: inicio.imagen
    }));
}

export default UseInicio;