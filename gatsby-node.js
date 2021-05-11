const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
    
    const respuesta = await graphql(`
        query{
            allStrapiPaginas{
                nodes{
                    nombre
                    id
                }
            }
            allStrapiPropiedades{
                nodes{
                    nombre
                    id
                }
            }
        }
    `);

    //console.log(JSON.stringify(respuesta.data.allStrapiPropiedades.nodes));

    if(respuesta.errors){
        reporter.panic('No se pudieron obtener resultados', respuesta.errors);
    }

    const paginas = respuesta.data.allStrapiPaginas.nodes;
    const propiedades = respuesta.data.allStrapiPropiedades.nodes;

    //Paginas dinamicas header
    paginas.forEach( pagina => {
        actions.createPage({
            path: urlSlug( pagina.nombre ),
            component: require.resolve('./src/components/paginas.js'),
            context: {
                id: pagina.id
            }
        })
    })

    // si no hay errores crear las paginas dinamicas
    propiedades.forEach( propiedad => {
        actions.createPage({
            path: urlSlug( propiedad.nombre),
            component: require.resolve('./src/components/propiedades.js'),
            context: {
                id: propiedad.id
            }
        })
    })
}
/*
    action.createPage({
            path: propiedad.slug,
            component: require.resolve('./src/components/propiedad.js'),
            context: {
                slug: propiedad.slug
            }
        })


                    allStrapiPaginas{
                nodes{
                        nombre
                        id
                    }
                }
*/