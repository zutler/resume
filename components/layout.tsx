import React, { ReactNode, useRef, useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
import ThemeSwitcher from './ThemeSwitcher';
import Toolbar from './Toolbar';

const name = 'Dmitriy Zutler';
export const siteTitle = 'Portfolio of Dmitriy Zutler';
export const siteDescription =
  'I am a senior web developer with a passion to build web applications in a User-Friendly way!';

type LayoutProps = {
  children: ReactNode;
  home?: boolean;
};

const Layout = ({ children, home }: LayoutProps) => {
  const toolbarTopRef = useRef<HTMLHeadingElement>(null);
  const toolbarBottomRef = useRef<HTMLHeadingElement>(null);
  const [toolbarTopHeight, setToolbarTopHeight] = useState(0);
  const [toolbarBottomHeight, setToolbarBottomHeight] = useState(0);

  React.useEffect(() => {
    if (toolbarTopRef.current) {
      setToolbarTopHeight(toolbarTopRef.current.offsetHeight);
    }
    if (toolbarBottomRef.current) {
      setToolbarBottomHeight(toolbarBottomRef.current.offsetHeight);
    }
  }, [toolbarTopRef, toolbarBottomRef]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={siteDescription} />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <Box>
        <div ref={toolbarTopRef}>
          <Toolbar>
            <ThemeSwitcher />
          </Toolbar>
        </div>
        <Flex
          align="center"
          direction="column"
          flex="1"
          height={`calc(100vh - ${toolbarTopHeight + toolbarBottomHeight}px)`}
          overflowY="auto"
        >
          <header>
            {home ? (
              <Flex direction="column" align="center" mt={4}>
                <Image
                  priority
                  src="/images/binary.jpeg"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
                <Heading as="h1" size={'lg'}>
                  {name}
                </Heading>
              </Flex>
            ) : (
              <Flex direction="column" align="center" mt={4}>
                <NextLink href={'/'} passHref>
                  <Link color="teal.500">
                    <Image
                      priority
                      src="/images/binary.jpeg"
                      className={utilStyles.borderCircle}
                      height={108}
                      width={108}
                      alt={name}
                    />
                  </Link>
                </NextLink>
                <Heading as="h3" size={'md'}>
                  <NextLink href={'/'} passHref>
                    <Link color="teal.500">{name}</Link>
                  </NextLink>
                </Heading>
              </Flex>
            )}
          </header>
          <Box m="2rem 5rem">
            <main>{children}</main>
            {!home && (
              <div className={styles.backToHome}>
                <NextLink href={'/'} passHref>
                  <Link color="teal.500">← Back to home</Link>
                </NextLink>
              </div>
            )}
          </Box>
        </Flex>
        <div ref={toolbarBottomRef}>
          <Toolbar justify="center">
            <footer>&copy; {new Date().getFullYear()}</footer>
          </Toolbar>
        </div>
      </Box>
    </>
  );
};

export default Layout;