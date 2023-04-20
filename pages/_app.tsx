import { ChakraProvider } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import theme from '@/configs/theme';
import MainLayout from '@/components/Layout';
import constitution from './api/konstituciya.json';

function MyApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: any;
}) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} constitution={constitution} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
