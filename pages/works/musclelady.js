import {
    Container,
    Badge,
    Link
  } from '@chakra-ui/react'
  import { Title } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import Image from 'next/image'
  import musclelady from "../../public/images/works/musclelady.png"
  import NextLink from "next/link"

  const Work = () => (
    <Layout title="Muscle Lady">
      <Container maxW='container.lg' mb={4}>
        <Title>
          muscle lady <Badge>1-jun-2023</Badge>
        </Title>
        <P>
          Made using{' '} <NextLink href="https://www.adobe.com/products/photoshop.html"><Link>Photoshop</Link></NextLink> with a{' '} <NextLink href="https://gaomon.net/Pen_Tablet/M106KPRO.html"><Link>Gaomon M106k Pro tablet</Link></NextLink>.
        </P>
        <Image src={musclelady} alt="musclelady"/>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'