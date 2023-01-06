import {
    Container,
    Badge,
    Link
  } from '@chakra-ui/react'
  import { Title } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import Image from 'next/image'
  import shalomharlow from "../../public/images/works/shalom_harlow.png"
  import NextLink from "next/link"

  const Work = () => (
    <Layout title="Shalom Harlow">
      <Container maxW='container.lg' mb={4}>
        <Title>
          Shalom Harlow <Badge>06-jan-2023</Badge>
        </Title>
        <P>
          Made using{' '} <NextLink href="https://www.clipstudio.net/en/"><Link>ClipStudioPaint</Link></NextLink> with a{' '} <NextLink href="https://gaomon.net/Pen_Tablet/M106KPRO.html"><Link>Gaomon M106k Pro tablet</Link></NextLink>.
        </P>
        <Image src={shalomharlow} alt="shalomharlow"/>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'