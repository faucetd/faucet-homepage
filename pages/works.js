import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Section from "../components/section"
import { WorkGridItem } from '../components/grid-item'
import bodysketch1 from "../public/images/works/bodysketch1.png"
import pixelfrog from "../public/images/works/pixelfrog.png"
import tyguy from "../public/images/works/tyguy.png"
import shalomharlow from "../public/images/works/shalom_harlow.png"
import robot from "../public/images/works/robot.png"

const Works = () => {
    return (
        <Container maxW='container.xl'>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[3, 3, 3]} gap={6}>

            <Section>
            <WorkGridItem id="robot" title="Robot" thumbnail={robot}>9/jan/2023</WorkGridItem>
            </Section>

            <Section>
            <WorkGridItem id="shalomharlow" title="Shalom Harlow" thumbnail={shalomharlow}>6/jan/2023</WorkGridItem>
            </Section>

            <Section>
            <WorkGridItem id="pixelfrog" title="Pixel Frog" thumbnail={pixelfrog}>5/jan/2023</WorkGridItem>
        </Section>
            <Section>
            <WorkGridItem id="bodysketch1" title="Body Sketch 1" thumbnail={bodysketch1}> 4/jan/2023</WorkGridItem>
        </Section>
        <Section>
            <WorkGridItem id="tyguy" title="TyGuy" thumbnail={tyguy}> 28/oct/2022</WorkGridItem>
        </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works 