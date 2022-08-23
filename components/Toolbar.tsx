import { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

type ToolbarProps = {
  children: ReactNode;
  backgroundColor?: string;
  color?: string;
  justify?: 'left' | 'right' | 'center';
};

const Toolbar = (props: ToolbarProps) => {
  const {
    children,
    backgroundColor = 'teal',
    color = 'white',
    justify = 'right',
  } = props;
  return (
    <Box {...props} bg={backgroundColor} color={color}>
      <Flex p={2} justify={justify} align='center'>
        {children}
      </Flex>
    </Box>
  );
};

export default Toolbar;
