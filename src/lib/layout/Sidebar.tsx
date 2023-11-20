/*
 - [ ] Add a sidebar to the left of the page it will be used in the global layout.
 - it shouild have 
 (/)
 */

import { Box, Collapse, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const links = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Interviews',
      href: '/interviews',
      interviews: [
        {
          name: 'All Interviews',
          href: '/interviews/all',
        },
        {
          name: 'Upcoming Interviews',
          href: '/interviews/upcoming',
        },
        {
          name: 'Past Interviews',
          href: '/interviews/past',
        },
      ],
    },
    {
      name: 'My Questions',
      href: '/questions',
    },
    {
      name: 'Settings',
      href: '/settings',
    },
  ];

  const router = useRouter();
  const handleLinkClick = (href) => {
    router.push(href);
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
      <VStack spacing={4} align="center" pb={36}>
        <Heading fontSize="7xl" p={6}>
          MockBuddy
        </Heading>
        <Box>
          {links.map((link) => (
            <Box key={link.name}>
              <Flex
                align="center"
                justify="center"
                w="full"
                mb={8}
                p={4}
                gap={4}
                onClick={() => handleLinkClick(link.href)}
              >
                <Text fontSize="2xl">{link.name}</Text>
              </Flex>
              {link.interviews && (
                <Collapse in animateOpacity>
                  <VStack spacing={4} align="center" pb={36}>
                    {link.interviews.map((interview) => (
                      <Box key={interview.name}>
                        <Flex
                          align="center"
                          justify="center"
                          w="full"
                          mb={8}
                          p={4}
                          gap={4}
                          onClick={() => handleLinkClick(interview.href)}
                        >
                          <Text fontSize="2xl">{interview.name}</Text>
                        </Flex>
                      </Box>
                    ))}
                  </VStack>
                </Collapse>
              )}
            </Box>
          ))}
        </Box>
      </VStack>
    </Flex>
  );
}
