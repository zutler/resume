import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react';

import { EducationDataType } from '../types';
import Date from './date';

type ComponentProps = {
  backgroundColor?: string;
  color?: string;
  data: EducationDataType;
  justify?: 'left' | 'right' | 'center' | 'space-between';
};

const EducationAccordion = (props: ComponentProps) => {
  const { data, justify = 'left' } = props;

  return (
    <Accordion allowToggle>
      {data.map(
        ({ id, date, degree, college, major, minor, gpa, location }) => (
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
                  <Flex wrap={'wrap'}>
                    <Text textAlign='left' mr={1}>
                      {`${degree}:`}
                    </Text>
                    <Text as='b' textAlign='left' mr={4}>
                      {`${college}`}
                    </Text>
                    <Text textAlign={['left']} mr={4}>
                      {`GPA: ${gpa}`}
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
              <Text textAlign='left' mr={4}>
                <b>Major:</b> {major}
              </Text>
              <Text textAlign='left' mr={4}>
                <b>Minor:</b> {minor}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        )
      )}
    </Accordion>
  );
};

export default EducationAccordion;
