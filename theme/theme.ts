// Chakra-UI based theme

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const fonts = {
  heading: `'Roboto', sans-serif`,
  body: `'Source Sans Pro', sans-serif`,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts,
});

export default theme;
