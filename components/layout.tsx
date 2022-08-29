import { Box, Flex, Heading, Link, Spacer } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import React, { ReactNode, useRef, useState } from 'react';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
import ThemeSwitcher from './ThemeSwitcher';
import Toolbar from './Toolbar';

const name = 'Dmitriy Zutler';
export const siteTitle = 'Portfolio of Dmitriy Zutler';
export const siteDescription =
  'I am an experienced Web Developer with a passion to build User-Oriented, Highly Performant Web Applications.';

type LayoutProps = {
  children: ReactNode;
  home?: boolean;
};

const defaultHeight = 0;

const Layout = ({ children, home }: LayoutProps) => {
  const toolbarTopRef = useRef<HTMLHeadingElement>(null);
  const toolbarBottomRef = useRef<HTMLHeadingElement>(null);
  const [toolbarTopHeight, setToolbarTopHeight] = useState(defaultHeight);
  const [toolbarBottomHeight, setToolbarBottomHeight] = useState(defaultHeight);

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
        <link rel='icon' href='/favicon.png' />
        <meta name='description' content={siteDescription} />
        <meta name='og:title' content={siteTitle} />
      </Head>

      <Box fontSize='xl'>
        <div ref={toolbarTopRef}>
          <Toolbar>
            <Heading size='lg'>{name}</Heading>
            <Spacer />
            <ThemeSwitcher />
          </Toolbar>
        </div>
        <Flex
          align='center'
          direction='column'
          flex='1'
          height={`calc(100vh - ${toolbarTopHeight + toolbarBottomHeight}px)`}
          overflowY='auto'
        >
          <header>
            <Box mt={4}>
              {home ? (
                <Image
                  priority
                  src='/images/binary.jpeg'
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
              ) : (
                <NextLink href={'/'} passHref>
                  <Link color='teal.500'>
                    <Image
                      priority
                      src='/images/binary.jpeg'
                      className={utilStyles.borderCircle}
                      height={108}
                      width={108}
                      alt={name}
                    />
                  </Link>
                </NextLink>
              )}
            </Box>
          </header>
          <Box m={4} p={4} width={['90vw', '90vw', '80vw', '80vw']}>
            <main>{children}</main>
            {!home && (
              <div className={styles.backToHome}>
                <NextLink href={'/'} passHref>
                  <Link color='teal.500'>← Back to Home</Link>
                </NextLink>
              </div>
            )}
          </Box>
        </Flex>
        <div ref={toolbarBottomRef}>
          <Toolbar justify='center'>
            <footer>&copy; {new Date().getFullYear()}</footer>
          </Toolbar>
        </div>
      </Box>
    </>
  );
};

export default Layout;
