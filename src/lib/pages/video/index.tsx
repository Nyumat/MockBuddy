'use client';

import { Flex } from '@chakra-ui/react';

import WebcamCapture from '~/lib/components/video/WebcamCapture';

const Video = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <WebcamCapture />
    </Flex>
  );
};

export default Video;
