import React, { FC } from 'react';
import Head from 'next/head';

interface NextHeadProps {
  title?: string;
  description?: string;
}

const NextHead: FC<NextHeadProps> = ({
  title = '404',
  description = 'Republic.kg – ваш проводник в мире законов, кодексов и юридических аспектов Кыргызской Республики. Мы создали этот сайт, чтобы сделать юридическую информацию доступной и понятной для каждого, независимо от возраста или профессии. 🌐',
}) => {
  return (
    <Head>
      <title>Re | {title}</title>
      <meta name='description' content={description} />
    </Head>
  );
};

export default NextHead;
