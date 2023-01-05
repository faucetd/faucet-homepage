import {
    Container,
    Badge,
    Link
  } from '@chakra-ui/react'
  import { Title } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import Image from 'next/image'
  import img from "../../public/images/works/tyguy.png"
  import NextLink from "next/link"
  
  const Work = () => (
    <Layout title="ty guy">
      <Container maxW='container.lg' mb={4}>
        <Title>
          Ty Guy <Badge>28-oct-2022</Badge>
        </Title>
        <P>
          Made using{' '} <NextLink href="https://paint.js.org/"><Link>paint.js</Link></NextLink> with a macbook trackpad for the incredible{' '} <NextLink href="https://www.twitch.tv/heytheretyler"><Link>heytheretyler</Link></NextLink>.
        </P>
        <Image src={img} alt="img"/>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'