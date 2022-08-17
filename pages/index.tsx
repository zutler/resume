import NextLink from 'next/link';
import { Heading, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Date from '../components/date';
import Layout, { siteDescription, siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedJobsData } from '../lib/jobs';

type DataProps = {
  allJobsData: {
    date: string;
    title: string;
    id: string;
  }[];
};

const Home = ({ allJobsData }: DataProps) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Text fontSize="lg">{siteDescription}</Text>
      </section>
      <section>
        <Heading as="h2" size="lg">
          Resume
        </Heading>
        <UnorderedList>
          {allJobsData.map(({ id, date, title }) => (
            <ListItem key={id}>
              <NextLink href={`/jobs/${id}`} passHref>
                <Link color="teal.500">{title}</Link>
              </NextLink>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </ListItem>
          ))}
        </UnorderedList>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allJobsData = await getSortedJobsData();
  return {
    props: {
      allJobsData,
    },
  };
};

export default Home;
