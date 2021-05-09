const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
    
    const respuesta = await graphql(`
        query{
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

    const propiedades = respuesta.data.allStrapiPropiedades.nodes;

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
*/