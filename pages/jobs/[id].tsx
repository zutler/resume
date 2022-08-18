import { Heading } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllJobSlugs, getJobData } from '../../lib/jobs';
import utilStyles from '../../styles/utils.module.css';

export default function Job({
  jobData,
}: {
  jobData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{jobData.title}</title>
      </Head>
      <article>
        <Heading as="h4" size={'md'}>
          {jobData.title}
        </Heading>
        <div className={utilStyles.lightText}>
          <Date dateString={jobData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: jobData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllJobSlugs();

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const jobData = await getJobData(params?.id as string);
  return {
    props: {
      jobData,
    },
  };
};
