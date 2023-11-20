import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import StepOne from './StepOne';
import StepTwo from './StepTwo';

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
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
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedQuestionType, setSelectedQuestionType] = useState<string>('');
  const [selectedInterviewer, setSelectedInterviewer] = useState<string>('');

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

  const handleSelectInterviewer = (interviewer: string) => {
    setSelectedInterviewer(interviewer);
    router.push('/video');
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH={{ base: '70vh', md: '70vh' }}
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
          <StepTwo
            selectedType={selectedQuestionType}
            handleSelectInterviewer={handleSelectInterviewer}
          />
        </TransitionPage>
      )}
    </Flex>
  );
}

export default MultiStepForm;
