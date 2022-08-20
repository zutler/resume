import { Box, Text } from '@chakra-ui/react';
import { SkillsType } from '../types';

type PropsType = {
  data: SkillsType;
};

const Skills = ({ data }: PropsType) => {
  return (
    <Box mb={4}>
      {data.map((category) =>
        Object.entries(category).map(([key, value]) => (
          <div key={key}>
            <Text as='b'>{`${key}: `}</Text>
            <Text as='span'>
              {value.reduce((prev, curr) => `${prev}; ${curr}`)}
            </Text>
          </div>
        ))
      )}
    </Box>
  );
};

export default Skills;
