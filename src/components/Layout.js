import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';
import { Global, css } from '@emotion/react';

const Layout = (props) => {
    return (  
        <>
            <Global 
                styles={ css`
                    html{
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after{
                        box-sizing: inherit;
                    }

                    body{
                        font-size: 1.6rem;
                        line-height: 2;
                        font-family: 'Lato', sans-serif;

                    }
                    h1,h2,h3{
                        margin: 0;
                        line-height: 1.5;
                    }

                    h1,h2{
                        text-align: center;
                        font-family: 'Lato', sans-serif;
                        font-weight: 300;
                    }

                    h3{
                        font-family: 'Roboto', sans-serif;
                    }
                    ul{
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    s{
                        text-decoration: none;
                    }
                    img{
                        max-width: 100%;
                    }
                `}
            />

            <Helmet>
                <title>Repaso - Bienes Raices</title>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"/> 
            </Helmet>

            <Header  />

            {props.children}
        </>
    );
}

export default Layout;