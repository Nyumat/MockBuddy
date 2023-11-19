import { Box, Button, Flex, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import StepOne from './StepOne';
import StepTwo from './StepTwo';

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96], // You can adjust the ease function
};

function TransitionPage({ children, isActive }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      style={{ position: 'absolute', width: '100%' }}
    >
      {children}
    </motion.div>
  );
}

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [selectedQuestionType, setSelectedQuestionType] = useState<string>('');

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSelectQuestionType = (questionType: string) => {
    setSelectedQuestionType(questionType);
    handleNextStep();
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="full"
      mb={8}
      p={4}
      gap={4}
    >
      {step === 1 && (
        <TransitionPage isActive={step === 1}>
          <StepOne onSelectQuestionType={handleSelectQuestionType} />
        </TransitionPage>
      )}
      {step === 2 && (
        <TransitionPage isActive={step === 2}>
          <StepTwo selectedType={selectedQuestionType} />
        </TransitionPage>
      )}

      <Box
        position="absolute"
        top="5%"
        left="85%"
        transform="translate(-50%, -50%)"
        fontSize="lg"
        zIndex={999}
      >
        <HStack spacing={4} align="center">
          <Button
            onClick={handlePrevStep}
            disabled={step === 1}
            colorScheme="teal"
            variant="outline"
          >
            Previous
          </Button>
          <Button
            onClick={handleNextStep}
            disabled={step === 2}
            colorScheme="teal"
            variant="outline"
          >
            Next
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
}

export default MultiStepForm;
