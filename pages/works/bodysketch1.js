import {
    Container,
    Badge,
    Link
  } from '@chakra-ui/react'
  import { Title } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import Image from 'next/image'
  import bodysketch1 from "../../public/images/works/bodysketch1.png"
  import NextLink from "next/link"

  const Work = () => (
    <Layout title="Body Sketch 1">
      <Container maxW='container.lg' mb={4}>
        <Title>
          Body Sketch 1 <Badge>04-jan-2023</Badge>
        </Title>
        <P>
          Made using{' '} <NextLink href="https://www.clipstudio.net/en/"><Link>ClipStudioPaint</Link></NextLink> with a{' '} <NextLink href="https://gaomon.net/Pen_Tablet/M106KPRO.html"><Link>Gaomon M106k Pro tablet</Link></NextLink>.
        </P>
        <Image src={bodysketch1} alt="bodysketch1"/>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'