import { useEffect, useState } from 'react';
import { Box, Button, ButtonGroup, Collapse, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import EducationAccordion from '../components/EducationAccordion';
import JobsAccordion from '../components/JobsAccordion';
import Layout, { siteDescription, siteTitle } from '../components/layout';
import Skills from '../components/Skills';
import UserData from '../components/UserData';
import { getSortedEducationData } from '../lib/education';
import { getSortedJobsData } from '../lib/jobs';
import { getSkills } from '../lib/skills';
import { getUserData } from '../lib/user';
import useSectionStore from '../store/useSectionStore';
import {
  AllJobsDataType,
  EducationDataType,
  Section,
  SkillsType,
  UserDataType,
} from '../types';

type DataProps = {
  userData: UserDataType;
  skills: SkillsType;
  allJobsData: AllJobsDataType;
  educationData: EducationDataType;
};

const isSectionActive = (sections: Section[], key: string) =>
  sections?.find(item => item.id === key)?.isActive;

const Home = ({ userData, skills, allJobsData, educationData }: DataProps) => {
  const { sections, toggleActiveState } = useSectionStore();

  const [isOpenInfo, setOpenInfo] = useState(false);
  const [isOpenSkills, setOpenSkills] = useState(false);
  const [isOpenJobs, setOpenJobs] = useState(false);
  const [isOpenEducation, setOpenEducation] = useState(false);

  useEffect(() => {
    const isActiveJobsSection = isSectionActive(sections, 'jobs');
    const isActiveSkillsSection = isSectionActive(sections, 'skills');
    const isActiveInfoSection = isSectionActive(sections, 'info');
    const isActiveEducationSection = isSectionActive(sections, 'education');

    setOpenJobs(isActiveJobsSection as boolean);
    setOpenSkills(isActiveSkillsSection as boolean);
    setOpenInfo(isActiveInfoSection as boolean);
    setOpenEducation(isActiveEducationSection as boolean);
  }, [sections]);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <Text mb={2}>{siteDescription}</Text>
        <section>
          <ButtonGroup
            variant='link'
            colorScheme='teal'
            size='xl'
            mb={4}
            gap='4'
            width='100%'
            flexDirection={['column', 'column', 'row', 'row']}
          >
            <Button
              justifyContent='left'
              onClick={() => toggleActiveState('info')}
              mx='0 !important'
            >
              {isOpenInfo ? '-' : '+'} My Contacts
            </Button>
            <Button
              justifyContent='left'
              onClick={() => toggleActiveState('skills')}
              mx='0 !important'
            >
              {isOpenSkills ? '-' : '+'} My Skills
            </Button>
            <Button
              justifyContent='left'
              onClick={() => toggleActiveState('jobs')}
              mx='0 !important'
            >
              {isOpenJobs ? '-' : '+'} My Experience
            </Button>

            <Button
              justifyContent='left'
              mx='0 !important'
              onClick={() => toggleActiveState('education')}
            >
              {isOpenEducation ? '-' : '+'} My Education
            </Button>
          </ButtonGroup>
        </section>

        <Collapse in={isOpenInfo} animateOpacity>
          <Box
            p='4'
            pb='0'
            mb='4'
            border='1px solid teal'
            rounded='md'
            data-cy='user-accordion'
          >
            <UserData data={userData} />
          </Box>
        </Collapse>

        <Collapse in={isOpenSkills} animateOpacity>
          <Box
            p='4'
            pb='0'
            mb='4'
            border='1px solid teal'
            rounded='md'
            data-cy='skills-accordion'
          >
            <Skills data={skills} />
          </Box>
        </Collapse>

        <Collapse in={isOpenJobs} animateOpacity>
          <Box
            p='4'
            pb='4'
            mb='4'
            border='1px solid teal'
            rounded='md'
            data-cy='jobs-accordion'
          >
            <JobsAccordion data={allJobsData} justify='space-between' />
          </Box>
        </Collapse>

        <Collapse in={isOpenEducation} animateOpacity>
          <Box
            p='4'
            pb='4'
            mb='4'
            border='1px solid teal'
            rounded='md'
            data-cy='education-accordion'
          >
            <EducationAccordion data={educationData} justify='space-between' />
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
  const educationData = getSortedEducationData();
  return {
    props: {
      userData,
      skills,
      allJobsData,
      educationData,
    },
  };
};

export default Home;
