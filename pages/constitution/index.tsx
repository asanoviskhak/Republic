import NextHead from '@/components/NextHead';
import { Box, LinkOverlay, Text, useColorMode } from '@chakra-ui/react';
import { LinkBox, Link } from '@chakra-ui/react';

export default function Constitution({ ...props }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box width={'100%'} marginY={['2rem', '4rem']}>
      <NextHead title={'Конституция'} />
      {props.constitution.map((item: any, articleNumber: number) => {
        return (
          <Box
            key={item.title}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              width: '100%',
              textAlign: 'center',
            }}
            marginY={['1.5rem', '3rem']}
          >
            <Text
              as='h3'
              fontSize={['1.2rem', '1.6rem']}
              textTransform='lowercase'
            >
              {item.title}
            </Text>
            {item.chapters.map((chapter: any, chapterIndex: number) => {
              return (
                <LinkBox
                  as='article'
                  key={chapter.title}
                  sx={{
                    width: '100%',
                    border: `1px solid ${
                      colorMode === 'light' ? '#cbd5e0' : '#4a5568'
                    }`,
                    borderRadius: '1rem',
                    padding: '1rem',
                    backgroundColor: colorMode === 'light' ? '#fff' : '#1a202c',
                    _hover: {
                      backgroundColor:
                        colorMode === 'light' ? '#f7fafc' : '#2d3748',
                    },
                  }}
                >
                  <LinkOverlay
                    href={`/constitution/chapters/${articleNumber}/${chapterIndex}`}
                  >
                    <Text as='h2' fontSize='1.3rem' flex='1' textAlign='left'>
                      <strong>{chapter.title}</strong>
                    </Text>
                  </LinkOverlay>
                  <Text as='h3' flex='1' textAlign='left' color='grey'>
                    <strong>{chapter.articles.length} статьи</strong>
                  </Text>
                </LinkBox>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
}
