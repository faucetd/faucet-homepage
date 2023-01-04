import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../lib/theme'

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Component {...pageProps} key={router.route} /> 
            </Layout>
        </ChakraProvider>
    )
}

export default Website