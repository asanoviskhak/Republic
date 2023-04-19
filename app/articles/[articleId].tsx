import { useRouter } from 'next/router';

const Article = () => {
  const router = useRouter();
  const { articleId } = router.query;

  return <p>Article: {articleId}</p>;
};

export default Article;
