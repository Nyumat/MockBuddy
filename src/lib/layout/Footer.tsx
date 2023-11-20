import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center" mt={24}>
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link href="https://sznm.dev" isExternal rel="noopener noreferrer">
          MockBuddy
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
