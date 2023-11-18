'use client';

import { Flex, Text } from '@chakra-ui/react';

const Feedback = () => {
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
      <Text fontSize={40}>Here is your AI-generated feedback!</Text>
    </Flex>
  );
};

export default Feedback;