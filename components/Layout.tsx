import React, { FC } from 'react';
import Head from 'next/head';
import {
  Container,
  Box,
  Heading,
  Switch,
  FormLabel,
  FormControl,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
interface MainLayoutProps {
  title?: string;
  children: React.ReactNode | React.ReactNode[];
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW='4xl' centerContent>
      <Head>
        <meta property='og:title' content='Republic.kg' />
        <meta
          property='og:description'
          content='Republic.kg – ваш проводник в мире законов, кодексов и юридических аспектов Кыргызской Республики. Мы создали этот сайт, чтобы сделать юридическую информацию доступной и понятной для каждого, независимо от возраста или профессии. 🌐'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://republic.kg' />
        <meta property='og:image' content='https://republic.kg/og-image.png' />
        <meta property='og:site_name' content='Republic.kg' />
        <meta property='og:locale' content='ru_RU' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@republic_kg' />
        <meta name='twitter:creator' content='@republic_kg' />
        <meta name='twitter:title' content='Republic.kg' />
        <meta
          name='twitter:description'
          content='Republic.kg – ваш проводник в мире законов, кодексов и юридических аспектов Кыргызской Республики. Мы создали этот сайт, чтобы сделать юридическую информацию доступной и понятной для каждого, независимо от возраста или профессии. 🌐'
        />
        <meta name='twitter:image' content='https://republic.kg/og-image.png' />

        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        {/* <link rel='manifest' href='/manifest.json' /> */}
      </Head>
      <Box
        marginY={['2rem', '4rem']}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'left',
          width: '100%',
          gap: '3rem',
        }}
      >
        <Heading fontFamily='mono' fontStyle='italic' as={Link} href='/'>
          Republic
        </Heading>
        <FormControl
          sx={{
            width: 'fit-content',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FormLabel
            htmlFor='dark-mode'
            sx={{
              marginBottom: 0,
            }}
            alignItems='baseline'
          >
            <Text fontSize='sm'>Темная тема</Text>
          </FormLabel>
          <Switch
            id='dark-mode'
            size='md'
            onChange={toggleColorMode}
            isChecked={colorMode === 'dark'}
          />
        </FormControl>
      </Box>
      {children}
    </Container>
  );
};

export default MainLayout;
