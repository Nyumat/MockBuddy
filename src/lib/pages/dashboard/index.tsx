'use client';

import { Flex } from '@chakra-ui/react';

import CardGrid, { Header } from '~/lib/components/dashboard';

const Dashboard = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      w="full"
    >
      <Header />
      <CardGrid />
    </Flex>
  );
};

export default Dashboard;
