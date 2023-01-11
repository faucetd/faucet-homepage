import { Button, Container, Box, List, ListItem, Heading, Image, Link, useColorModeValue, Icon, FormControl, FormLabel, Input, Textarea, FormErrorMessage, Text, useToast} from '@chakra-ui/react'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoGithub, IoLogoTwitch } from 'react-icons/io5'
import React, { useState } from "react";
import { sendContactForm } from '../lib/api'

const initValues = {name: "", email: "", subject: "", message: "",}

const initState = {values: initValues}

const Page = () => {
    const toast = useToast()
    const [state, setState] = useState(initState); 
    const [touched, setTouched] = useState({}); 
    
    const {values, isLoading, error} = state

    const onBlur = ({target}) => setTouched((prev) => ({...prev, 
        [target.name]:true

    }))

    const handleChange = ({target}) => setState((prev)=>({
        ...prev, 
        values: {
            ...prev.values,
            [target.name]: target.value, 
        }, 
    }));

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev, 
            isLoading:true
        }));

        try{ 
            await sendContactForm(values); 
            setTouched({}), 
            setState(initState);
            toast({
                title: "Message sent!!", 
                status: "success", 
                duration: 2500, 
                position: "bottom-right"
            }); 

        } catch(error){
            setState((prev) => ({
                ...prev, 
                isLoading:false,
                error:error.message
            }));
        }    
    }
    
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
        
        <Section delay={0.3}>
            <Box borderWidth={1} p={6} mt={8} borderColor={useColorModeValue('blackAlpha.700', 'whiteAlpha.200')} maxW="500px">
        <Heading as="h3" variant="section-title" mb={4} align="center">
                Commission Form
            </Heading>
            <Text align="center" color={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}>Want a commission done? Feel free to message me here or DM me over socials!</Text>
            {error && (
                <Text color="red.300" my={4} fontsize="xl">{error}</Text>
            )}
            <FormControl isRequired mb={5} mt={5} isInvalid={touched.name && !values.name}>
                <FormLabel>Name</FormLabel>
                <Input onBlur={onBlur} errorBorderColor="red.300" borderColor="teal.400" focusBorderColor="teal.400" maxW="450px" type="text" name="name" value = {values.name} onChange={handleChange}/>
            <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl isRequired mb={5} isInvalid={touched.email && !values.email}>
                <FormLabel>Email</FormLabel>
                <Input onBlur={onBlur} errorBorderColor="red.300" borderColor="teal.400" focusBorderColor="teal.400" maxW="450px" type="email" name="email" value = {values.email} onChange={handleChange}/>
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl isRequired mb={5} isInvalid={touched.subject && !values.subject}>
                <FormLabel>Subject</FormLabel>
                <Input onBlur={onBlur} errorBorderColor="red.300" borderColor="teal.400" focusBorderColor="teal.400" maxW="450px" type="text" name="subject" value = {values.subject} onChange={handleChange}/>
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl isRequired mb={5}  isInvalid={touched.message && !values.message}>
                <FormLabel>Message</FormLabel>
                <Textarea onBlur={onBlur} errorBorderColor="red.300" borderColor="teal.400" focusBorderColor="teal.400" maxW="450px" rows={4} type="text" name="message" value = {values.message} onChange={handleChange}/>
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <Button onClick={onSubmit} isLoading={isLoading} variant="outline" colorScheme="teal" disabled={!values.name || !values.email || !values.subject || !values.message}>Submit</Button>
            </Box>
            </Section>
            
        </Container> 
    )
}

export default Page