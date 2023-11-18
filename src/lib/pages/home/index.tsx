'use client';

import { Flex, Text } from '@chakra-ui/react';

const Home = () => {
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
      <Text fontSize={50}>Elevate your tech interviews.</Text>
    </Flex>
  );
};

export default Home;
