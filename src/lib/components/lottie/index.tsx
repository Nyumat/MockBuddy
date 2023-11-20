import { Box } from '@chakra-ui/react';
import { useLottie } from 'lottie-react';
import gradient from './gradient.json';

const GradientBackground = () => {
  const options = {
    animationData: gradient,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <Box
      position="fixed"
      bottom="-40px"
      left="0"
      right="0"
      width="100vw"
      height="auto"
      zIndex={-1}
      opacity={1}
    >
      {View}
    </Box>
  );
};

export default GradientBackground;
