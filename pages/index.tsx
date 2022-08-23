import { Box, Button, Collapse, Text, useDisclosure } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout, { siteDescription, siteTitle } from '../components/layout';
import MyAccordion from '../components/MyAccordion';
import Skills from '../components/Skills';
import UserData from '../components/UserData';
import { getSortedJobsData } from '../lib/jobs';
import { getSkills } from '../lib/skills';
import { getUserData } from '../lib/user';
import { AllJobsDataType, SkillsType, UserDataType } from '../types';

type DataProps = {
  userData: UserDataType;
  skills: SkillsType;
  allJobsData: AllJobsDataType;
};

const Home = ({ userData, skills, allJobsData }: DataProps) => {
  const { isOpen: isOpenInfo, onToggle: onToggleInfo } = useDisclosure();
  const { isOpen: isOpenSkills, onToggle: onToggleSkills } = useDisclosure();
  const { isOpen: isOpenJobs, onToggle: onToggleJobs } = useDisclosure();
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <section>
          <Button
            colorScheme='teal'
            w={150}
            mb={4}
            mr={4}
            onClick={onToggleInfo}
          >
            {isOpenInfo ? '-' : '+'} My Contacts
          </Button>
          <Button
            colorScheme='teal'
            w={150}
            mb={4}
            mr={4}
            onClick={onToggleSkills}
          >
            {isOpenSkills ? '-' : '+'} My Skills
          </Button>
          <Button colorScheme='teal' w={150} mb={4} onClick={onToggleJobs}>
            {isOpenJobs ? '-' : '+'} My Experience
          </Button>
        </section>

        <Collapse in={isOpenInfo} animateOpacity>
          <Box p='4' pb='0' mb='4' border='1px solid teal' rounded='md'>
            <UserData data={userData} />
          </Box>
        </Collapse>

        <Collapse in={isOpenSkills} animateOpacity>
          <Box p='4' pb='0' mb='4' border='1px solid teal' rounded='md'>
            <Skills data={skills} />
          </Box>
        </Collapse>

        <Text fontSize='lg' pb={4}>
          {siteDescription}
        </Text>
      </section>

      <Collapse in={isOpenJobs} animateOpacity>
        <Box p='4' pb='4' mb='4' border='1px solid teal' rounded='md'>
          <MyAccordion data={allJobsData} justify='space-between' />
        </Box>
      </Collapse>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const userData = getUserData();
  const allJobsData = getSortedJobsData();
  const skills = getSkills();
  return {
    props: {
      userData,
      skills,
      allJobsData,
    },
  };
};

export default Home;
