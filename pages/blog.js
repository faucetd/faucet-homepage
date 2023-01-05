import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "../components/section"
import { BioSection, BioYear } from '../components/bio'
import { Meta } from '../components/work'
import { Badge } from "@chakra-ui/react"
import Paragraph from "../components/paragraph"

const Works = () => {
    return (
        <Container maxW='container.xl'>
            <Heading as="h3" fontSize={20} mb={4}>
                Blog
            </Heading>
            <Section>
                <Badge colorScheme="green" mr={2}>04-jan-2023</Badge>
                <Paragraph mb={2}>it's 11pm and this thing is <i>finally</i> working (kinda). such a complete and utter waste of time with all of the stuff i should be doing to prep for work/school/actual life stuff. i hope to get my art off the ground soon, i just wanted a more centralized place to keep it other than a social media platform. getting the drawing tablet is probably one of the best investments i have made in a while.</Paragraph>
                <Paragraph>i need to start working on my emotions more. and by that i think i mean managing them. "managing" in the sense of gaining a better understanding of them, which is why i am starting this blog in the first place. </Paragraph>
                <Paragraph>i wish i was a better programmer!! goodness i might just be stuck doing ui/ux. maybe one day i'll be editing this from the comfort of a google doc, and not the depths of some .js file that i pray gets pushed onto deployment- hopefully this doesn't get out of control too fast.  </Paragraph>
                <Paragraph>also i keep falling into bad habits/thinking patterns. it's so difficult trying to navigate out of them. i think drawing more should help. also focusing more on work could be good rather than trying to occupy my mind with youtube videos. we shall see. </Paragraph>
                <div align="right">we shall see how this goes ~ faucet</div>
            </Section>
           
        </Container>
    )
}

export default Works 