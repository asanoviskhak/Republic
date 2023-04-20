import { Box, Heading, Highlight, useColorMode, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  return (
    <Box width={'100%'} marginY={['2rem', '4rem']}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Heading lineHeight='tall'>
            <Highlight
              query={['законов', 'кодексов', 'юридических']}
              styles={{
                px: '2',
                py: '2',
                rounded: 'full',
                bg: colorMode === 'light' ? '#cbd5e0' : '#4a5568',
                color: colorMode === 'light' ? '#1a202c' : '#fff',
              }}
            >
              Republic.kg – ваш проводник в мире законов, кодексов и юридических
              аспектов Кыргызской Республики. Мы создали этот сайт, чтобы
              сделать юридическую информацию доступной и понятной для каждого,
              независимо от возраста или профессии. 🌐
            </Highlight>
          </Heading>
        </Box>
      </Box>
      <Box
        as='button'
        sx={{
          display: 'flex',
          width: '100%',
          border: `1.5px solid ${
            colorMode === 'light' ? '#cbd5e0' : '#4a5568'
          }`,
          borderRadius: '5rem',
          padding: '1rem',
          backgroundColor: colorMode === 'light' ? '#fff' : '#1a202c',
          _hover: {
            backgroundColor: colorMode === 'light' ? '#f7fafc' : '#2d3748',
          },
          justifyContent: 'center',
          alignItems: 'baseline',
        }}
        marginY={['1.5rem', '3rem']}
        onClick={() => {
          router.push('/constitution');
        }}
      >
        <Text fontSize={['1rem', '3rem']} fontStyle='italic' textAlign='center'>
          Прочитать конституцию <ArrowForwardIcon />
        </Text>
      </Box>
    </Box>
  );
}
