import { Button, Container, FormHelperText, Box, RadioGroup, Radio, HStack, Heading, useColorModeValue, FormControl, FormLabel, Input, Textarea, FormErrorMessage, Text, useToast} from '@chakra-ui/react'
import Section from "../components/section";
import React, { useState } from "react";
import { sendContactForm } from '../lib/api';
import { storage } from '../config/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from "uuid";

const initValues = {name: "", email: "", pricing: "", subject: "", message: "", link: ""}

const initState = {values: initValues}

const Page = () => {
    const toast = useToast()
    const [state, setState] = useState(initState); 
    const [touched, setTouched] = useState({}); 
    const [myPricing, setMyPricing] = useState('')
    const [imageUpload, setImageUpload] = useState(null)
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
        values.pricing = myPricing
        
        if(imageUpload != null) {
            const lol = imageUpload.name + v4()
            const imageRef = ref(storage, `images/${lol}`); 
            values.link = `https://firebasestorage.googleapis.com/v0/b/faucet-homepage.appspot.com/o/images%2F${lol}?alt=media&token=8ae5919a-7bf0-4a81-a23d-69f8a380ea15`.toString()
            uploadBytes(imageRef, imageUpload)   
        }
        

        setState((prev) => ({
            ...prev, 
            isLoading:true, 
        }));

        try{ 
            await sendContactForm(values); 
            setTouched({}), 
            setState(initState);
            setMyPricing("")
            setImageUpload(null)
            
            toast({
                title: "message sent!!", 
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
        <Container align="center" maxW="container.xl">
            
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
                <Input placeholder='grongus mcgougar III' onBlur={onBlur} errorBorderColor="red.300" borderColor="teal.400" focusBorderColor="teal.400" maxW="450px" type="text" name="name" value = {values.name} onChange={handleChange}/>
            <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl isRequired mb={5} isInvalid={touched.email && !values.email}>
                <FormLabel>Email</FormLabel>
                <Input placeholder='iceclimber@badboykillaz.com' onBlur={onBlur} errorBorderColor="red.300" borderColor="teal.400" focusBorderColor="teal.400" maxW="450px" type="email" name="email" value = {values.email} onChange={handleChange}/>
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl isRequired mb={5} isInvalid={touched.pricing && !values.pricing}>
                <FormLabel as='legend'>Pricing</FormLabel>
                    <RadioGroup  onChange={setMyPricing} value = {myPricing} >
                        <HStack spacing='24px'>
                        <Radio name="5$" value='5$' checked={values.pricing === '5$'}>5$</Radio>
                        <Radio name="13$" value='13$' checked={values.pricing === '13$'}>13$</Radio>
                        <Radio name="25$" value='25$' checked={values.pricing === '25$'}>25$</Radio>
                        <Radio name="Other" value='Other' checked={values.pricing === 'Other'}>Other</Radio>
                        </HStack>
                     </RadioGroup>
            </FormControl>

            <FormControl isRequired mb={5} isInvalid={touched.subject && !values.subject}>
                <FormLabel>Subject</FormLabel>
                <Input placeholder='plz specify price if you selected "Other"' onBlur={onBlur} errorBorderColor="red.300" borderColor="teal.400" focusBorderColor="teal.400" maxW="450px" type="text" name="subject" value = {values.subject} onChange={handleChange}/>
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>


            <FormControl isRequired mb={5}  isInvalid={touched.message && !values.message}>
                <FormLabel>Message</FormLabel> 
                <Textarea placeholder='describe what u want! we will converse back and forth via email :)' onBlur={onBlur} errorBorderColor="red.300" borderColor="teal.400" focusBorderColor="teal.400" maxW="450px" rows={4} type="text" name="message" value = {values.message} onChange={handleChange}/>
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl mb={5}>
                <FormLabel>Reference Image</FormLabel> 
                <FormHelperText pb={1} align="left">feel free to upload a png, jpg, jpeg, or pdf!!</FormHelperText>
                <Input pt={1} onChange={(event)=> {setImageUpload(event.target.files[0])}} type="file" onenter  accept=".pdf,.png,.jpg,.jpeg" borderColor="teal.400" focusBorderColor="teal.400" maxW="450px" rows={4} name="image"/>
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <Button onClick={onSubmit} isLoading={isLoading} variant="outline" colorScheme="teal" disabled={!values.name || !values.email || !values.subject || !values.message}>Submit</Button>
            </Box>
            </Section>
            
        </Container> 
    )
}

export default Page