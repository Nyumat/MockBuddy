import { Flex, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Blur = () => {
  return (
    <motion.div
      className="blur"
      style={{
        position: 'absolute',
        zIndex: -9999,
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        backdropFilter: 'blur(100px)',
      }}
    />
  );
};

const Gradient = () => {
  const { colorMode } = useColorMode();
  return (
    <div
      className="gradient-container"
      style={{
        position: 'absolute',
        top: 0,
        zIndex: -99999,
        height: '50vh',
        width: '50vw',
        borderRadius: '50%',
        overflow: 'hidden',
      }}
    >
      <motion.div
        className="gradient"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          borderRadius: '50%',
          background:
            colorMode === 'light'
              ? 'linear-gradient(180deg, #65BDE7 0%, #5C7AC1 50%, #7BA8a9 100%)'
              : 'linear-gradient(180deg, #5C7AF1 0%, #65BDE7 50%, #73c8a9 100%)',
          backdropFilter: 'blur(10px)',
        }}
      />
    </div>
  );
};

const GradientCircle = () => {
  return (
    <div>
      <Blur />
      <Flex
        direction="row"
        justifyContent="space-between"
        w="full"
        h="full"
        p={8}
        gap="500px"
      >
        <Gradient />
      </Flex>
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '0%',
          zIndex: -99999,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Gradient />
      </div>
    </div>
  );
};

export default GradientCircle;
