import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<Record<string, Theme['colors']['black']>> = {
    brand: {
        500: '#73FBD3',
        600: '#44E5E7',
        700: '#59D2FE',
        800: '#4A8FE7',
        900: '#5C7AFF',
    },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
    ...overridenChakraColors,
    ...extendedColors,
};
