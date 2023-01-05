import { Button, Container, Box, List, ListItem, Heading, Image, Link, useColorModeValue, Icon } from '@chakra-ui/react'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoGithub, IoLogoTwitch } from 'react-icons/io5'

const Page = () => {
    return ( 
        <Container maxW="container.xl">
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a US-based full-stack developer and artist!
            </Box>
        <Box display={{md : 'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    faucet
                </Heading>
                    <p>Developer / Artist / University student / Software engineer / 我说中文</p>
                </Box> 
               <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                <Image borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden" src="/images/profile3.png" alt="profile"/>
                </Box> 
        </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title" mb={4}>
                Work
            </Heading>
            <Paragraph>
I am a twitch streamer, artist, and software engineer. Seeking hands-on experience with various tools and programming languages in the field of software/web development. Actively honing in on my digital art skills :D.</Paragraph>
<Box align="center" my={4}><NextLink href="/works">
    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My portfolio</Button></NextLink></Box>
        </Section>

        <Section delay={0.2}>
        <Heading as="h3" variant="section-title" mb={4}>
                Bio
            </Heading>
            <BioSection>
                <BioYear>2003</BioYear>Born in NYC.
            </BioSection>
            <BioSection>
            <BioYear>2021</BioYear>Enrolled in a University Computer Science Program. Began learning Chinese (非常好!)
            </BioSection>
            <BioSection>
            <BioYear>2022 to present</BioYear>Started streaming programming sessions, started digital drawing.
            </BioSection>
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title" mb={4}>
                I ♥
            </Heading>
            <Paragraph>Art, web-development, drawing, photography, music, coding interview problems :s, machine learning, practicing Chinese (练习中文).</Paragraph>
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title" mb={4}>
                On the web
            </Heading>
            <List>
                <ListItem>
                    <Link href="https://github.com/faucetd" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>
                            @faucetd
                        </Button>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link href="https://www.twitch.tv/faucet_destroyer" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitch}/>}>
                        @faucet_destroyer
                        </Button>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link href="https://twitter.com/destroyerfaucet" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter}/>}>
                        @destroyerfaucet
                        </Button>
                    </Link>
                </ListItem>
                
            </List>
        </Section>
        </Container> 
    )
}

export default Page