import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const QuestionTypeButton = ({ type, onSelectQuestionType }: any) => {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.2 }}
    >
      <Box
        my={8}
        w="full"
        h="full"
        _hover={{
          transform: 'scale(1.05)',
          transition: 'all 0.5s ease-in-out',
        }}
        p={8}
        rounded="xl"
        bg={type === 'Behavioral' ? '#65BDE7' : '#5C7AF1'}
        boxShadow="xl"
        cursor="pointer"
        onClick={() => onSelectQuestionType(type)}
        display={{ base: 'none', md: 'block' }}
      >
        <Heading fontSize="3xl" p={6} textAlign="center" color="white">
          {type}
        </Heading>
      </Box>
    </motion.div>
  );
};

const Header = ({ fontSize, p, textAlign }: any) => {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        delay: 0.2,
      }}
      style={{
        fontSize: `${fontSize}px`,
        textAlign,
        padding: p,
        fontWeight: 700,
      }}
    >
      Select a question type.
    </motion.h1>
  );
};

function StepOne({ onSelectQuestionType }: any) {
  return (
    <VStack spacing={4} align="center" pb={36}>
      <Header fontSize={90} p={6} textAlign="center" />
      <Flex
        direction="row"
        w="full"
        justify="center"
        align="center"
        gap={12}
        mb={8}
      >
        <QuestionTypeButton
          type="Behavioral"
          onSelectQuestionType={onSelectQuestionType}
        />
        <QuestionTypeButton
          type="Technical"
          onSelectQuestionType={onSelectQuestionType}
        />
      </Flex>
    </VStack>
  );
}

export default StepOne;
