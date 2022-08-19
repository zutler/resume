import { Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import Date from '../components/date';
import Layout, { siteDescription, siteTitle } from '../components/layout';
import UserData from '../components/UserData';
import { getSortedJobsData } from '../lib/jobs';
import { getUserData } from '../lib/user';
import utilStyles from '../styles/utils.module.css';
import { UserDataType } from '../types';

type AllJobsDataType = {
  date: string;
  title: string;
  id: string;
}[];

type DataProps = {
  userData: UserDataType;
  allJobsData: AllJobsDataType;
};

const Home = ({ userData, allJobsData }: DataProps) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <UserData data={userData} />
        <Text fontSize="lg" pb={4}>
          {siteDescription}
        </Text>
      </section>

      <section>
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

export const getStaticProps: GetStaticProps = () => {
  const userData = getUserData();
  const allJobsData = getSortedJobsData();
  return {
    props: {
      userData,
      allJobsData,
    },
  };
};

export default Home;
