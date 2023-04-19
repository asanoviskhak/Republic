import React, { FC } from 'react';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';

interface MainLayoutProps {
  title?: string;
  children: React.ReactNode | React.ReactNode[];
}

const MainLayout: FC<MainLayoutProps> = ({ title = '404', children }) => {
  return (
    <Container maxW='4xl' centerContent>
      <Head>
        <title>Re | {title}</title>
        <meta
          name='description'
          content='Republic.kg – ваш проводник в мире законов, кодексов и юридических аспектов Кыргызской Республики. Мы создали этот сайт, чтобы сделать юридическую информацию доступной и понятной для каждого, независимо от возраста или профессии. 🌐'
        />
        {/* create meta tags for socials */}

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
        <link rel='manifest' href='/manifest.json' />
      </Head>
      {children}
    </Container>
  );
};

export default MainLayout;
