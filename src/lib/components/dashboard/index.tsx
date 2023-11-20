// Card.tsx
import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import type React from 'react';
import { FcApproval } from 'react-icons/fc';

type Label = {
  text: string;
  colorScheme?: string;
};

type CardProps = {
  title: string;
  description: string;
  labels: Label[];
  status?: string;
};

type FakeData = {
  title: string;
  description: string;
  labels: Label[];
  status?: string;
}[];

const Card: React.FC<CardProps> = ({ title, description, labels, status }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      border={useColorModeValue('1px solid #E2E8F0', '1px solid #2D3748')}
      rounded="xl"
      p={6}
      mx={4}
    >
      <Box gap={8} mb={12}>
        <Heading size="md">{title}</Heading>
        <Text size="sm" color="darkgray">
          {description}
        </Text>
      </Box>

      <Flex gap={2}>
        {labels.map((label) => (
          <Badge
            key={label.text}
            rounded="full"
            px={2}
            colorScheme={colorMode === 'light' ? 'gray' : 'blackAlpha'}
          >
            {label.text}
          </Badge>
        ))}
        {status && (
          <Badge rounded="full" px={2} colorScheme="teal">
            <Flex gap={1} dir="row" w="full" align="center" justify="center">
              <FcApproval />
              <Text>{status}</Text>
            </Flex>
          </Badge>
        )}
      </Flex>
    </Box>
  );
};

const CardGrid: React.FC = () => {
  const productManagement = 'Product Management';
  const softwareEngineering = 'Software Engineering';

  const fakeData: FakeData = [
    {
      title: 'Why this company?',
      description: 'Why do you want to work for Google?',
      labels: [{ text: productManagement, colorScheme: 'blackAlpha' }],
      status: 'Completed',
    },
    {
      title: 'What are your strengths?',
      description: 'What are your strengths and weaknesses?',
      labels: [{ text: productManagement, colorScheme: 'blackAlpha' }],
      status: 'Completed',
    },
    {
      title: 'What are you most proud of?',
      description:
        "Tell me about the thing you'\re most proud of.Why is it important to you?",
      labels: [{ text: productManagement, colorScheme: 'blackAlpha' }],
      status: 'Completed',
    },
    {
      title: "What is the most technically challenging idea you've worked on?",
      description:
        'What made it challenging? How did you overcome those challenges?',
      labels: [{ text: softwareEngineering, colorScheme: 'blackAlpha' }],
      status: 'Completed',
    },
  ];

  const breakpoint = useBreakpointValue({
    base: 'base',
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
  });
  const gridTemplateColumns =
    breakpoint === 'base' ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)';
  const gridGap = breakpoint === 'base' ? 6 : 12;

  return (
    <Grid templateColumns={gridTemplateColumns} gap={gridGap}>
      {fakeData.map((data) => (
        <GridItem key={data.title}>
          <Card {...data} />
        </GridItem>
      ))}
    </Grid>
  );
};

export const Header: React.FC = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      gap={4}
      mb={8}
      w="full"
    >
      <Heading size="2xl">Behavioral Questions</Heading>
      <Text fontSize="xl" color="darkgray">
        Search through all of the questions in the question bank. If you don
        &apos;t see one you&apos;re looking for, you can always add it in your
        &quot;My Questions&quot; tab.
      </Text>
    </Flex>
  );
};

export default CardGrid;
