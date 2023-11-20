import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

interface SelectionProps {
  name: string;
  title: string;
  onClick: () => void;
}

function Selection({ name, title, onClick }: SelectionProps) {
  return (
    <Box
      w="50%"
      p={6}
      borderWidth={2}
      borderRadius={5}
      transition="all 0.2s ease-in-out"
      _hover={{
        boxShadow: 'xl',
        cursor: 'pointer',
        borderColor: '#5C7AF1',
        backgroundColor: '#5C7AF1',
        color: 'white',
      }}
      boxShadow="lg"
      borderColor="#3498db"
      backdropBlur={4}
      backdropFilter="blur(4px)"
      bg={useColorModeValue('gray.200', 'gray.800')}
      onClick={onClick}
    >
      <Flex flexDir="column" justify="center" gap={2}>
        <Text fontSize="2xl" color={useColorModeValue('gray.200', 'white')}>
          {name}
        </Text>
        <Text fontSize="2xl" color={useColorModeValue('gray.200', 'white')}>
          {title}
        </Text>
      </Flex>
    </Box>
  );
}

function StepTwo({ selectedType, handleSelectInterviewer }) {
  return (
    <VStack spacing={4} align="center">
      <Heading fontSize="6xl" p={2}>
        Add An Interviewer
      </Heading>
      <Text fontSize="3xl" p={3} mb={2}>
        Choose whoever makes you feel comfortable. You can always try again with
        another one.
      </Text>

      <Selection
        name="John Dover"
        title="Software Engineer"
        onClick={() => handleSelectInterviewer('John Dover')}
      />
      <Selection
        name="Jane Smith"
        title="Software Engineer"
        onClick={() => handleSelectInterviewer('Jane Smith')}
      />
    </VStack>
  );
}

export default StepTwo;
