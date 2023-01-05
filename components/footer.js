import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" mt={2}opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} faucet. All Rights Reserved.
    </Box>
  )
}

export default Footer