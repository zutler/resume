import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/global.css';
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
