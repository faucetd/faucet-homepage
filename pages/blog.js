import { Container, Heading } from "@chakra-ui/react"
import Section from "../components/section"
import { Badge } from "@chakra-ui/react"
import Paragraph from "../components/paragraph"

const Works = () => {
    return (
        <Container maxW='container.xl'>
            <Heading as="h3" fontSize={20} mb={4}>
                Blog
            </Heading>
            <Section pb={4}>
                <Badge colorScheme="yellow" mr={2}>17-feb-2023</Badge>
                <Paragraph mb={2}>holy crap it has been a hot minute since i have changed this. just finished updating the commissions/freelance form. it took so long but i am quite happy with it. even got a database connected to this site! perhaps that means soon i wont have to write on this blog form directly, either that or i will make an admin page of sorts- someone who has total read/write perms.</Paragraph>
                <Paragraph>but yeah, i have a pretty big technical interview i need to study for before monday. i really hope it works out. i've just been messing around with this for the majority of my time, but who knows maybe it could lead to some good money. regardless i like practicing webdev stuff greatly. </Paragraph>
                <Paragraph>okok, i think next on the todos: get database working for blog stuff so i can write these REMOTELY, update API keys on vercel so that they are private </Paragraph>
                <div align="right">should write here more often, should draw a lil more, SHOULD LEARN SQL CHRIST ~ faucet</div>
            </Section>
            <Section>
                <Badge colorScheme="green" mr={2}>04-jan-2023</Badge>
                <Paragraph mb={2}>it&apos;s 11pm and this thing is <i>finally</i> working (kinda). such a complete and utter waste of time with all of the stuff i should be doing to prep for work/school/actual life stuff. i hope to get my art off the ground soon, i just wanted a more centralized place to keep it other than a social media platform. getting the drawing tablet is probably one of the best investments i have made in a while.</Paragraph>
                <Paragraph>i need to start working on my emotions more. and by that i think i mean managing them. &quot;managing&quot; in the sense of gaining a better understanding of them, which is why i am starting this blog in the first place. </Paragraph>
                <Paragraph>i wish i was a better programmer!! goodness i might just be stuck doing ui/ux. maybe one day i&apos;ll be editing this from the comfort of a google doc, and not the depths of some .js file that i pray gets pushed onto deployment- hopefully this doesn&apos;t get out of control too fast.  </Paragraph>
                <Paragraph>also i keep falling into bad habits/thinking patterns. it&apos;s so difficult trying to navigate out of them. i think drawing more should help. also focusing more on work could be good rather than trying to occupy my mind with youtube videos. we shall see. </Paragraph>
                <div align="right">we shall see how this goes ~ faucet</div>
            </Section>
           
        </Container>
    )
}

export default Works 