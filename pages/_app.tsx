import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Flex } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return <Flex justifyContent="center">
    <Component {...pageProps} />
  </Flex>
}
export default MyApp
