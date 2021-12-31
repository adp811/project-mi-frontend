import React from 'react';
import { HiUserGroup } from 'react-icons/hi';
import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    Heading,
    Text,
    Grid,
    GridItem,
    Container,
    Center,
  } from '@chakra-ui/react';

const Feature = ({ heading, text }) => {
    return (
        <GridItem>
            <Heading pb={2} as='h4' size='md'>
                {heading}
            </Heading>
            <Text align={'center'}>{text}</Text>
        </GridItem>
    )
  };

const FeatureList = () => {
    return (
        <Center>
            <Box as={Container} maxW={'5xl'} mt={14} p={4}>
                <Grid
                    templateColumns={'repeat(3, 1fr)'}
                    gap={'5'}
                    alignContent={'center'}>
                    <Feature
                    heading={'Anonymous Ratings'}
                    text={'Short text describing one of you features/service'}
                    />
                    <Feature
                    heading={'Second Feature'}
                    text={'Short text describing one of you features/service'}
                    />
                    <Feature
                    heading={'Third Feature'}
                    text={'Short text describing one of you features/service'}
                    />
                </Grid>
                <Divider mt={12} mb={12} />
                <Grid
                    templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                    }}
                    gap={4}>
                    <GridItem colSpan={1}>
                        <VStack alignItems="flex-start" spacing="20px">
                            <Heading as='h3' size='lg' >
                            Medium length title
                            </Heading>
                            <Button colorScheme="green" size="md" bgGradient='linear(to-r, #000428, #004e92)' >
                            Get Started
                            </Button>
                        </VStack>
                    </GridItem>
                    <GridItem>
                        <Flex>
                            <Text align={'left'} >
                            Provide your customers a story they would enjoy keeping in mind
                            the objectives of your website. Pay special attention to the tone
                            of voice.
                            </Text>
                        </Flex>
                    </GridItem>
                </Grid>

            </Box>
        </Center>
    )
}

export default FeatureList
