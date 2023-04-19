'use client';

import { Inter } from 'next/font/google';
import {
  Accordion,
  Box,
  Container,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import konstituciya from './api/konstituciya.json';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Container maxW='2xl' centerContent>
      <Box>
        <Accordion allowToggle>
          {konstituciya.map((item: any, index: number) => {
            return (
              <AccordionItem key={item.title}>
                <AccordionButton>
                  <Box as='h2' flex='1' textAlign='left'>
                    <strong>{item.title}</strong>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                  {item.articles.map((article: any, index: number) => {
                    return (
                      <Box key={article.title}>
                        <Link href={`/articles/${article.title}`}>
                          <h3>
                            <strong>{article.title}</strong>
                          </h3>
                        </Link>
                      </Box>
                    );
                  })}
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Box>
    </Container>
  );
}
