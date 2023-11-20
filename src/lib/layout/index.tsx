'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import GradientBackground from '../components/lottie';

import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
        <Box margin="8">
          <Box as="main" marginY={22}>
            {children}
          </Box>
          <Footer />
          <GradientBackground />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
