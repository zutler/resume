import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  ExpandedIndex,
  Flex,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import useAccordionStore from '../store/useAccordionStore';
import { AllJobsDataType } from '../types';
import Date from './date';

type ComponentProps = {
  backgroundColor?: string;
  color?: string;
  data: AllJobsDataType;
  justify?: 'left' | 'right' | 'center' | 'space-between';
};

const JobsAccordion = (props: ComponentProps) => {
  const { data, justify = 'left' } = props;
  const { current, setCurrent } = useAccordionStore();

  const setDefaultIndex = (expandedIndex: ExpandedIndex) => {
    setCurrent(expandedIndex as number);
  };

  return (
    <Accordion
      allowToggle
      defaultIndex={current as ExpandedIndex}
      onChange={setDefaultIndex}
    >
      {data.map(({ id, date, title, company, location }) => (
        <AccordionItem key={id} data-cy={`accordion-item-${id}`}>
          <AccordionButton _expanded={{ bg: 'teal.500', color: 'white' }}>
            <Flex
              direction={['column', 'column', 'column', 'column', 'row', 'row']}
              justify={[justify]}
              align='top'
              w='100%'
              fontSize='xl'
            >
              <Flex justify={'space-between'}>
                <Text as='b' textAlign='left' mr={4}>
                  {company}:
                </Text>
                <Text textAlign={['right']} mr={4}>
                  {title}
                </Text>
              </Flex>
              <Spacer flex={1} />
              <Text textAlign={'left'} mr={4}>
                {location}
              </Text>
              <Flex minW={200}>
                <Text size='small' mr={1}>
                  <Date dateString={date.from} />
                </Text>
                <span>-</span>
                <Text size='small' ml={1} mr={8}>
                  <Date dateString={date.to} />
                </Text>
              </Flex>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel my={2} pb={2}>
            <NextLink href={`/jobs/${id}`} passHref>
              <Link color={'teal.500'}>Job Details</Link>
            </NextLink>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default JobsAccordion;
