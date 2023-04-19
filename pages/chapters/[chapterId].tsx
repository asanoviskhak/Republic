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
import konstituciya from '../api/konstituciya.json';
import { useEffect, useState } from 'react';
import MainLayout from '../components/Layout';

const ChapterView = () => {
  const router = useRouter();
  const { chapterId } = router.query;
  const [currentChapter, setCurrentChapter] = useState<any>(null);

  useEffect(() => {
    if (konstituciya) {
      setCurrentChapter(konstituciya[Number(chapterId)]);
    }
  }, [chapterId]);

  return (
    <MainLayout
      title={currentChapter ? String(currentChapter.title) : 'Loading...'}
    >
      <Box
        marginY='4rem'
        sx={{
          alignSelf: 'flex-start',
        }}
      >
        <Button as={Link} href='/' variant='outline'>
          Назад
        </Button>
      </Box>
      <Box marginY='4rem'>
        {currentChapter ? (
          <Heading fontSize='xxx-large' fontWeight='black' textAlign='left'>
            {currentChapter.title}
          </Heading>
        ) : null}
      </Box>
      <Box
        marginY='2rem'
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
                      fontSize='2rem'
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
                      gap: '1.6rem',
                    }}
                  >
                    {item.paragraphs.map((paragraph: string) => {
                      return (
                        <Text fontSize='1.6rem' key={paragraph}>
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
    </MainLayout>
  );
};

export default ChapterView;
