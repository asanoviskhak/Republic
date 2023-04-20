import { ChakraProvider } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import theme from '@/configs/theme';

function MyApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: any;
}) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
