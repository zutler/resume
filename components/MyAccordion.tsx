import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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

const MyAccordion = (props: ComponentProps) => {
  const { data, justify = 'left' } = props;
  const { current, setCurrent } = useAccordionStore();

  return (
    <Accordion allowToggle defaultIndex={[current]}>
      {data.map(({ id, date, title, company, location }, index) => (
        <AccordionItem key={id}>
          <h2>
            <AccordionButton _expanded={{ bg: 'teal.500', color: 'white' }}>
              <Flex
                direction={[
                  'column',
                  'column',
                  'column',
                  'column',
                  'row',
                  'row',
                ]}
                justify={[justify]}
                align='top'
                w='100%'
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
          </h2>
          <AccordionPanel pb={2}>
            <NextLink href={`/jobs/${id}`} passHref>
              <Link color={'teal.500'} onClick={() => setCurrent(index)}>
                Job Details
              </Link>
            </NextLink>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MyAccordion;
