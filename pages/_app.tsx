import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import ErrorBoundary from '../components/ErrorBoundary';
import '@fontsource/roboto/300.css';
import '@fontsource/source-sans-pro/400.css';
import theme from '../theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ErrorBoundary>
  );
}
