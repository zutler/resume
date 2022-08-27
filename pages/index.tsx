import { useEffect, useState } from 'react';
import { Box, Button, Collapse, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout, { siteDescription, siteTitle } from '../components/layout';
import MyAccordion from '../components/MyAccordion';
import Skills from '../components/Skills';
import UserData from '../components/UserData';
import { getSortedJobsData } from '../lib/jobs';
import { getSkills } from '../lib/skills';
import { getUserData } from '../lib/user';
import useSectionStore from '../store/useSectionStore';
import { AllJobsDataType, Section, SkillsType, UserDataType } from '../types';

type DataProps = {
  userData: UserDataType;
  skills: SkillsType;
  allJobsData: AllJobsDataType;
};

const btnWidth = 170;

const isSectionActive = (sections: Section[], key: string) =>
  sections?.find(item => item.id === key)?.isActive;

const Home = ({ userData, skills, allJobsData }: DataProps) => {
  const { sections, toggleActiveState } = useSectionStore();

  const [isOpenInfo, setOpenInfo] = useState(false);
  const [isOpenSkills, setOpenSkills] = useState(false);
  const [isOpenJobs, setOpenJobs] = useState(false);

  useEffect(() => {
    const isActiveJobsSection = isSectionActive(sections, 'jobs');
    const isActiveSkillsSection = isSectionActive(sections, 'skills');
    const isActiveInfoSection = isSectionActive(sections, 'info');

    setOpenJobs(isActiveJobsSection as boolean);
    setOpenSkills(isActiveSkillsSection as boolean);
    setOpenInfo(isActiveInfoSection as boolean);
  }, [sections]);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <Text fontSize='lg' pb={4}>
          {siteDescription}
        </Text>
        <section>
          <Button
            colorScheme='teal'
            w={btnWidth}
            mb={4}
            mr={4}
            onClick={() => toggleActiveState('info')}
          >
            {isOpenInfo ? '-' : '+'} My Contacts
          </Button>
          <Button
            colorScheme='teal'
            w={btnWidth}
            mb={4}
            mr={4}
            onClick={() => toggleActiveState('skills')}
          >
            {isOpenSkills ? '-' : '+'} My Skills
          </Button>
          <Button
            colorScheme='teal'
            w={btnWidth}
            mb={4}
            onClick={() => toggleActiveState('jobs')}
          >
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

        <Collapse in={isOpenJobs} animateOpacity>
          <Box p='4' pb='4' mb='4' border='1px solid teal' rounded='md'>
            <MyAccordion data={allJobsData} justify='space-between' />
          </Box>
        </Collapse>
      </section>
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
