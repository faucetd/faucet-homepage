import {
    Container,
    Badge,
    Link
  } from '@chakra-ui/react'
  import { Title } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import Image from 'next/image'
  import pixelfrog from "../../public/images/works/pixelfrog.png"
  import NextLink from "next/link"
  
  const Work = () => (
    <Layout title="pixelfrog">
      <Container maxW='container.lg' mb={4}>
        <Title>
          pixelfrog <Badge>05-jan-2023</Badge>
        </Title>
        <P>
          Made using{' '} <NextLink href="https://paint.js.org/"><Link>paint.js</Link></NextLink> with a macbook trackpad.
        </P>
        <Image src={pixelfrog} alt="pixelfrog"/>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'