import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import Fonts from "../components/fonts"
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react';

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence mode="wait" initial={true}>
                <Component {...pageProps} key={router.route} /> 
                </AnimatePresence>
                <Analytics />
            </Layout>
        </ChakraProvider>
    )
}

export default Website