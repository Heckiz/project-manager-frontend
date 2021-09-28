import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Flex justifyContent="center">
        <Box w={{ base: "90vw", lg: "50vw" }}>
          <Component {...pageProps} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
export default MyApp;
