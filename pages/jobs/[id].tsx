import { Flex, Heading, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllJobSlugs, getJobData } from '../../lib/jobs';
import { JobType } from '../../types';

type JobProp = { jobData: JobType };

export default function Job({ jobData }: JobProp) {
  return (
    <Layout>
      <Head>{jobData?.title && <title>{jobData.title}</title>}</Head>
      <article>
        {jobData?.company && (
          <Heading as='h3' size={'lg'} mb={1}>
            {jobData.company}
          </Heading>
        )}
        {jobData?.title && (
          <Heading as='h4' size={'md'} mb={1}>
            {jobData.title}
          </Heading>
        )}
        <Flex mb={4}>
          {jobData?.date?.from && (
            <Text mr={1} colorScheme='gray.200'>
              <Date dateString={jobData.date.from} />
            </Text>
          )}
          <span>-</span>
          {jobData?.date && (
            <Text ml={1} colorScheme='gray.200'>
              <Date dateString={jobData.date.to} />
            </Text>
          )}
        </Flex>
        {jobData?.contentHtml && (
          <Text
            as='span'
            dangerouslySetInnerHTML={{ __html: jobData.contentHtml }}
          ></Text>
        )}
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllJobSlugs();

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const jobData = getJobData(params?.id as string);
  return {
    props: {
      jobData,
    },
  };
};
