'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import GradientCircle from '~/lib/components/motion/GradientCircle';

const VerticalLine = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      borderLeft={`18px solid ${colorMode === 'light' ? '#65BDE7' : '#5C7AF1'}`}
      height="64px"
      position="absolute"
      left="50%"
      top="29%"
      width="0px"
      padding="0px"
      transform="translate(-50%, 0%) rotate(180deg)"
      boxShadow={
        colorMode === 'light'
          ? '0px -4px 4px rgba(0, 0, 0, 0.25)'
          : '0px -4px 4px rgba(255, 255, 255, 0.25)'
      }
      zIndex={-1}
    />
  );
};

export const AnimatedBall = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      position="relative"
      display="inline-block"
      gap={2}
      mr={0.5}
      textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
    >
      <VerticalLine />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 0.5,
        }}
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: colorMode === 'light' ? '#65BDE7' : '#5C7AF1',
          position: 'relative',
          top: '-80px',
          display: 'inline-block',
          boxShadow:
            colorMode === 'light'
              ? '0px 4px 4px rgba(0, 0, 0, 0.25)'
              : '0px 4px 4px rgba(255, 255, 255, 0.25)',
        }}
      />
    </Box>
  );
};

const Home = () => {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      maxHeight="70vh"
      gap={4}
      mb={8}
      w="full"
      textShadow={
        colorMode === 'light'
          ? '0px 4px 4px rgba(0, 0, 0, 0.25)'
          : '0px 4px 4px rgba(255, 255, 255, 0.25)'
      }
    >
      <GradientCircle />
      <Heading
        as={motion.h1}
        fontSize="110px"
        w="full"
        textAlign="center"
        lineHeight="110px"
        letterSpacing="-2px"
        ml="20px"
        p={6}
        fontWeight={800}
        color={
          colorMode === 'light'
            ? theme.colors.gray[800]
            : theme.colors.gray[200]
        }
      >
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.1 }}
        >
          Level
        </motion.span>{' '}
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          up
        </motion.span>{' '}
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          your
        </motion.span>
        <br />
        <span
          style={{
            color: colorMode === 'light' ? '#65BDE7' : '#5C7AF1',
            width: '230px',
            textShadow:
              colorMode === 'light'
                ? '0px 4px 4px rgba(0, 0, 0, 0.25)'
                : '0px 4px 4px rgba(255, 255, 255, 0.25)',
          }}
        >
          <motion.span
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatedBall />
            nterview
          </motion.span>
        </span>{' '}
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          skills.
        </motion.span>
      </Heading>
      <motion.div
        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        initial={{ opacity: 0, y: 100, scale: 0.9, rotate: 0 }}
        transition={{ delay: 0.8 }}
        style={{ marginTop: '20px', scale: 1.5 }}
      >
        <Button
          as={Link}
          href="/onboard"
          size="lg"
          colorScheme="blue"
          bg={colorMode === 'light' ? '#65BDE7' : '#5C7AF1'}
          shadow="xl"
          rounded="xl"
          variant="solid"
          outline={`3px solid ${colorMode !== 'light' ? '#65BDE7' : '#5C7AF1'}`}
        >
          <Text fontSize="lg" fontWeight="bold">
            Join MockBuddy
          </Text>
        </Button>
      </motion.div>
    </Flex>
  );
};

export default Home;
