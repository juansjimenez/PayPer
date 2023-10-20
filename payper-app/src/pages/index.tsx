import Head from 'next/head'
import Container from '../components/container'
import MoreArticles from '../components/more-articles'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { useGetAllArticles, useGetArticle, useGetCurrentArticleId } from '@/integrations/payper-protocol/hooks/read'

export default function Index({ preview }: any) {

  const heroId = useGetCurrentArticleId();
  const heroPost = useGetArticle({ articleId: heroId });
  const moreArticles = useGetAllArticles();

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Next.js Blog Example with Wagmi`}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.name}
            coverImage="https://next-blog-wordpress.vercel.app/_next/image?url=https%3A%2F%2Fvercelsolutions.com%2Fwp-content%2Fuploads%2F2022%2F06%2Fclaudio-schwarz-ZuT6efbmt8U-unsplash-scaled.jpg&w=3840&q=75"
            date={heroPost.date}
            journalist={heroPost.journalist}
            id={Number(heroPost.id)}
            excerpt={heroPost.freeContent}
          />
        )}
        {moreArticles.length > 0 && <MoreArticles articles={moreArticles} />}
      </Container>
    </Layout>
  )
}
