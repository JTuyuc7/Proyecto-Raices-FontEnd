import { graphql, useStaticQuery } from 'gatsby';

const UsePropiedades = () => {
    
    const data = useStaticQuery( graphql`
    query{
        allStrapiPropiedades{
            nodes{
                id
                nombre
                estacionamiento
                wc
                precio
                descripcion
                habitaciones

                imagen{
                    childImageSharp{
                        gatsbyImageData
                    }
                }
                
                agentes{
                    Nombre
                    email
                    telefono
                }
                
                categoria{
                        nombre
                    }
                }
            }
        }
    `);
    
    return data.allStrapiPropiedades.nodes;
}

export default UsePropiedades;