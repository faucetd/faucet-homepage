import Head from "next/head"
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Faucet's homepage" />
                <meta name="author" content="faucet" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
                <title>faucet - homepage</title>
            </Head> 
            <NavBar path={router.asPath} />

            <Container maxW="container.xl" pt={14}>
         {children}
         <Footer />
        </Container>  
        </Box>
    )
}

export default Main