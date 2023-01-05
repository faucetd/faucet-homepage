import Head from "next/head"
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
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