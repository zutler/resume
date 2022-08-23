import { ReactNode } from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Link,
  ListItem,
  UnorderedList,
  Text,
  Spacer,
  Flex,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import Date from './date';
import { AllJobsDataType } from '../types';

type ComponentProps = {
  backgroundColor?: string;
  color?: string;
  data: AllJobsDataType;
  justify?: 'left' | 'right' | 'center' | 'space-between';
};

const MyAccordion = (props: ComponentProps) => {
  const { data, justify = 'left' } = props;
  return (
    <Accordion allowToggle>
      {data.map(({ id, date, title, company }) => (
        <AccordionItem key={id}>
          <h2>
            <AccordionButton _expanded={{ bg: 'teal.500', color: 'white' }}>
              <Flex justify={justify} w={'100%'}>
                <Flex>
                  <Text as='b' mr={4}>
                    {company}
                  </Text>
                  <Text>{title}</Text>
                </Flex>
                <Text size='small' mr={8}>
                  <Date dateString={date} />
                </Text>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={2}>
            <NextLink href={`/jobs/${id}`} passHref>
              <Link color={'teal.500'}>Job Details</Link>
            </NextLink>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MyAccordion;
