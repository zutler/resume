import { Box } from '@chakra-ui/react';
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
            <b>{`${key}: `}</b>
            {value.map((skill, index) => (
              <span key={skill}>
                {skill}
                {index === value.length - 1 ? '' : ', '}
              </span>
            ))}
          </div>
        ))
      )}
    </Box>
  );
};

export default Skills;
