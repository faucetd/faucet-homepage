import {
    Container,
    Badge,
    Link
  } from '@chakra-ui/react'
  import { Title } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import Image from 'next/image'
  import johnGalliano1999 from "../../public/images/works/johnGalliano1999.png"
  import NextLink from "next/link"

  const Work = () => (
    <Layout title="John Galliano 1999">
      <Container maxW='container.lg' mb={4}>
        <Title>
          john galliano 1999 <Badge>09-feb-2023</Badge>
        </Title>
        <P>
          Made using{' '} <NextLink href="https://www.adobe.com/products/photoshop.html"><Link>Photoshop</Link></NextLink> with a{' '} <NextLink href="https://gaomon.net/Pen_Tablet/M106KPRO.html"><Link>Gaomon M106k Pro tablet</Link></NextLink>.
        </P>
        <Image src={johnGalliano1999} alt="johnGalliano1999"/>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'