'use client';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import moment from 'moment';

const feedback = [
  {
    interviewType: 'Technical',
    interviewer: 'John Doe',
    date: '2023-10-10',
    score: '4.5',
    positives: [
      'You did a great job with the technical questions!',
      'You were able to answer all of the questions with ease.',
      'You clearly demonstrated your technical knowledge.',
    ],
    negatives: [
      'You could have done better with the behavioral questions.',
      'You seemed a bit nervous at times.',
    ],
  },
  {
    interviewType: 'Behavioral',
    interviewer: 'Jane Smith',
    date: '2023-10-15',
    score: '3.8',
    positives: [
      'Your communication skills were commendable.',
      'You demonstrated good problem-solving abilities.',
    ],
    negatives: [
      'You could work on providing more detailed answers.',
      'There were moments where you seemed unsure.',
    ],
  },
  {
    interviewType: 'Technical',
    interviewer: 'Chris Johnson',
    date: '2023-10-20',
    score: '4.2',
    positives: [
      'You interacted well with the panel members.',
      'Your technical knowledge was impressive.',
    ],
    negatives: [
      'Consider elaborating more on your past experiences.',
      'Some answers lacked specific examples.',
    ],
  },
  {
    interviewType: 'Behavioral',
    interviewer: 'John Doe',
    date: '2023-11-19',
    score: '4.0',
    positives: [
      'You effectively communicated your thoughts.',
      'Your enthusiasm for the role was evident.',
    ],
    negatives: [
      'Be cautious about talking too fast during responses.',
      'Some answers could benefit from more depth.',
    ],
  },
];

const Card = ({
  interviewType,
  interviewer,
  date,
  score,
  positives,
  negatives,
}: {
  interviewType: string;
  interviewer: string;
  date: string;
  score: string;
  positives: string[];
  negatives: string[];
}) => {
  return (
    <Accordion allowToggle w="full">
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Heading size="lg">
              {interviewType} Interview on {moment(date).format("MMM Do, 'YY")}
            </Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Heading
            size="md"
            style={{ textTransform: 'capitalize', textDecoration: 'italic' }}
            my={2}
          >
            Interviewer:{' '}
            <span style={{ textDecoration: 'underline' }}>{interviewer}</span>
          </Heading>
          <Heading size="sm">
            {/* oct. x. '23 */}
            Interview Date: {moment(date).format('MMM Do YY')}
          </Heading>
          <Heading size="sm">Your Interview Score: {score}</Heading>
          <Heading size="sm" mt={2}>
            Positives:
          </Heading>
          <Box ml={4} py={2}>
            {positives.map((positive, index) => (
              <Heading key={index} size="xs" color="green.500">
                {positive}
              </Heading>
            ))}
          </Box>
          <Heading size="sm" mt={2}>
            Negatives:
          </Heading>
          <Box ml={4}>
            {negatives.map((negative, index) => (
              <Heading key={index} size="xs" color="red.500">
                {negative}
              </Heading>
            ))}
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

const CardGrid = () => {
  return (
    <SimpleGrid columns={1} spacing={8} w="full">
      {feedback.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </SimpleGrid>
  );
};

const Feedback = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      p={8}
    >
      <Heading textAlign="left" size="3xl" mb={16} w="full">
        Interview Feedback
      </Heading>
      <CardGrid />
    </Flex>
  );
};

export default Feedback;
