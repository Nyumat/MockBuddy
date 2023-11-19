import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';

interface SelectionProps {
  name: string;
  title: string;
}

function Selection({ name, title }: SelectionProps) {
  return (
    <Box
      w="50%"
      p={6}
      borderWidth={2}
      borderRadius={5}
      _hover={{ boxShadow: 'xl', cursor: 'pointer', borderColor: '#3498db' }}
    >
      <Flex flexDir="column" justify="center" gap={2}>
        <Text fontSize="2xl">{name}</Text>
        <Text fontSize="2xl">{title}</Text>
      </Flex>
    </Box>
  );
}

function StepTwo({ selectedType }) {

  return (
    <VStack spacing={4} align="center">
      <Heading fontSize="5xl" p={6}>
        Add An Interviewer
      </Heading>
      <Text fontSize="2xl" p={6}>
        Choose whoever makes you feel comfortable. You can always try again with
        another one.
      </Text>

      <Selection name="John Dover" title="Software Engineer" />
      <Selection name="Jane Smith" title="Software Engineer" />
    </VStack>
  );
}

export default StepTwo;
