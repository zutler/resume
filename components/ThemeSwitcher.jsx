import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <IconButton
        aria-label='dark'
        bg='transparent'
        colorScheme='teal'
        fontSize='lg'
        icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
      />
    </Box>
  );
}

export default ThemeSwitcher;
