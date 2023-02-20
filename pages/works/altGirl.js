import {
    Container,
    Badge,
    Link
  } from '@chakra-ui/react'
  import { Title } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import Image from 'next/image'
  import altGirl from "../../public/images/works/alt-gal.png"
  import NextLink from "next/link"

  const Work = () => (
    <Layout title="Alt Girl">
      <Container maxW='container.lg' mb={4}>
        <Title>
          alt girl <Badge>20-feb-2023</Badge>
        </Title>
        <P>
          Made using{' '} <NextLink href="https://www.adobe.com/products/photoshop.html"><Link>Photoshop</Link></NextLink> with a{' '} <NextLink href="https://gaomon.net/Pen_Tablet/M106KPRO.html"><Link>Gaomon M106k Pro tablet</Link></NextLink>.
        </P>
        <Image src={altGirl} alt="johnGalliano1999"/>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'