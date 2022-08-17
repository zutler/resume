import { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

type ToolbarProps = {
  children: ReactNode;
  backgroundColor?: string;
  justify?: 'left' | 'right' | 'center';
};

const Toolbar = (props: ToolbarProps) => {
  const { children, backgroundColor = 'tomato', justify = 'right' } = props;
  return (
    <Box {...props} bg={backgroundColor}>
      <Flex p={2} justify={justify} align="center">
        {children}
      </Flex>
    </Box>
  );
};

export default Toolbar;
