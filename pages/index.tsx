import { Box, Heading, LinkOverlay, Text, Button } from '@chakra-ui/react';
import konstituciya from './api/konstituciya.json';
import { LinkBox, Link } from '@chakra-ui/react';
import MainLayout from './components/Layout';

export default function Home() {
  return (
    <MainLayout title='Главная'>
      <Box marginY='4rem'>
        <Heading>Приветствуем вас на Republic.kg! 👋</Heading>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
        marginY='4rem'
      >
        {konstituciya.map((item: any, index: number) => {
          return (
            <LinkBox
              as='article'
              key={item.title}
              sx={{
                width: '100%',
                border: '1px solid #e2e8f0',
                borderRadius: '1rem',
                padding: '1rem',
                _hover: {
                  backgroundColor: '#f7fafc',
                },
              }}
            >
              <LinkOverlay href={`/chapters/${index}`}>
                <Text as='h2' fontSize='1.3rem' flex='1' textAlign='left'>
                  <strong>{item.title}</strong>
                </Text>
              </LinkOverlay>
              <Text as='h3' flex='1' textAlign='left' color='grey'>
                <strong>{item.articles.length} статьи</strong>
              </Text>
            </LinkBox>
          );
        })}
      </Box>
    </MainLayout>
  );
}
