'use client';

import { Flex } from '@chakra-ui/react';

import MultiStepForm from '~/lib/components/onboarding/TransitionPage';

const Onboard = () => {
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
      <MultiStepForm />
    </Flex>
  );
};

export default Onboard;
