import { ChakraProvider } from '@chakra-ui/react';
import { NextComponentType } from 'next';

function MyApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: any;
}) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
