import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return ( 
        <Container maxW="container.xl">
            <Box borderRadius="lg" bg='red' p={3} mb={6} align="center">
                Hello, I&apos;m a US-based full-stack developer and artist!
            </Box>
        <Box display={{md : 'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    faucet
                </Heading>
                    <p>Developer / Artist / University student / Software engineer</p>
                </Box> 
               <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
            
                </Box> 
        </Box>
        </Container> 
    )
}

export default Page