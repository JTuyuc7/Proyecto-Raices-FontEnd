import React, { graphql, useStaticQuery } from 'gatsby';

const UseFiltro = () => {

    const categorias = useStaticQuery( graphql`
        query{
            allStrapiCategorias{
                nodes{
                    nombre
                }
            }
        }
    `);


    const FiltroUi = () => (
        <form>
            <select>
                <option value=""> -- Selecciona una categoria -- </option>
                <option value="Lago">Lago</option>
            </select>
        </form>
    )

    return {
        FiltroUi
    }
}

export default UseFiltro;