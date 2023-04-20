import {
  Box,
  Heading,
  LinkOverlay,
  Text,
  Button,
  useColorMode,
  Switch,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import konstituciya from './api/konstituciya.json';
import { LinkBox, Link } from '@chakra-ui/react';
import MainLayout from '../components/Layout';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <MainLayout title='Главная'>
      <Box
        marginY='4rem'
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
        <Heading>Republic</Heading>
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          width: '100%',
        }}
        marginY={['2rem', '4rem']}
      >
        {konstituciya.map((item: any, index: number) => {
          return (
            <LinkBox
              as='article'
              key={item.title}
              sx={{
                width: '100%',
                border: `1px solid ${
                  colorMode === 'light' ? '#cbd5e0' : '#4a5568'
                }`,
                borderRadius: '1rem',
                padding: '1rem',
                _hover: {
                  backgroundColor:
                    colorMode === 'light' ? '#e2e8f0' : '#2d3748',
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
