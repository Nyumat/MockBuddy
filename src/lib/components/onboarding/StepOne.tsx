import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function StepOne({ onSelectQuestionType }) {
  return (
    <VStack spacing={4} align="center">
      <Heading p={6}>Select a Question Type</Heading>
      <Flex>
        <MotionBox
          whileHover={{ backgroundColor: '#3498db', color: '#fff' }}
          onClick={() => onSelectQuestionType('behavioral')}
          p={4}
          m={2}
          borderWidth={1}
          borderRadius={5}
          cursor="pointer"
        >
          Behavioral
        </MotionBox>
        <MotionBox
          whileHover={{ backgroundColor: '#3498db', color: '#fff' }}
          onClick={() => onSelectQuestionType('technical')}
          p={4}
          m={2}
          borderWidth={1}
          borderRadius={5}
          cursor="pointer"
        >
          Technical
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default StepOne;
