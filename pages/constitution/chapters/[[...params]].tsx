import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Heading,
  Link,
  Text,
  Card,
  CardHeader,
  CardBody,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import NextHead from '@/components/NextHead';

const ChapterView = ({ ...props }) => {
  const router = useRouter();
  const { params } = router.query;
  const [currentChapter, setCurrentChapter] = useState<any>(null);

  useEffect(() => {
    if (props?.constitution && params) {
      setCurrentChapter(
        props?.constitution[Number(params[0])].chapters[Number(params[1])]
      );
    }
  }, [params, props?.constitution]);

  return (
    <Box width='100%'>
      <NextHead title={currentChapter ? currentChapter.title : 'Статья'} />
      <Box
        marginY={['2rem', '4rem']}
        sx={{
          alignSelf: 'flex-start',
        }}
      >
        <Button as={Link} href='/constitution' variant='outline'>
          Назад
        </Button>
      </Box>
      <Box
        marginY={['2rem', '4rem']}
        sx={{
          width: '100%',
        }}
      >
        {currentChapter ? (
          <Heading
            fontSize={['2xl', 'xxx-large']}
            fontWeight='black'
            textAlign='left'
          >
            {currentChapter.title}
          </Heading>
        ) : null}
      </Box>
      <Box
        marginY={['1rem', '2rem']}
        sx={{
          flex: 1,
          width: '100%',
        }}
      >
        {currentChapter ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {currentChapter.articles.map((item: any) => {
              return (
                <Card
                  sx={{
                    width: '100%',
                    flex: '1',
                  }}
                  key={item.title}
                  variant='outline'
                >
                  <CardHeader>
                    <Heading
                      as='h2'
                      fontSize={['1.4rem', '2rem']}
                      flex='1'
                      textAlign='left'
                      color='grey'
                    >
                      <strong>{item.title}</strong>
                    </Heading>
                  </CardHeader>
                  <CardBody
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: ['1rem', '1.6rem'],
                    }}
                  >
                    {item.paragraphs.map((paragraph: string) => {
                      return (
                        <Text fontSize={['1rem', '1.6rem']} key={paragraph}>
                          {paragraph}
                        </Text>
                      );
                    })}
                  </CardBody>
                </Card>
              );
            })}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default ChapterView;
