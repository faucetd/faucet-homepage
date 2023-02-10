import { Button, Container, Box, Heading, useColorModeValue, FormControl, FormLabel, Input, Textarea, FormErrorMessage, Text, useToast} from '@chakra-ui/react'
import React, { useState } from "react";
import Section from "../components/section"

const initValues = {name: "", email: "", subject: "", message: "",}

const initState = {values: initValues}


const Commissions = () => {
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
        <dev>
            <Heading as="h3" fontSize={20} mb={4}>
                Commissions
            </Heading>
        <Container align="center" maxW='container.xl'>
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
        </dev>
           
    )
}

export default Commissions 