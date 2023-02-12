import {
    Container,
    Badge,
    Link
  } from '@chakra-ui/react'
  import { Title } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import Image from 'next/image'
  import johnGalliano2011 from "../../public/images/works/johnGalliano2011.png"
  import NextLink from "next/link"

  const Work = () => (
    <Layout title="John Galliano 2011">
      <Container maxW='container.lg' mb={4}>
        <Title>
          john galliano 2011 <Badge>03-feb-2023</Badge>
        </Title>
        <P>
          Made using{' '} <NextLink href="https://www.adobe.com/products/photoshop.html"><Link>Photoshop</Link></NextLink> with a{' '} <NextLink href="https://gaomon.net/Pen_Tablet/M106KPRO.html"><Link>Gaomon M106k Pro tablet</Link></NextLink>.
        </P>
        <Image src={johnGalliano2011} alt="johnGalliano2011"/>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'