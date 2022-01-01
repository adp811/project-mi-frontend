import React from 'react';
import { Box, SimpleGrid, Heading, Text, Stack, Flex, Center } from '@chakra-ui/react';
import { HiUserGroup } from 'react-icons/hi';

const Feature = ({ title, text, icon }) => {
    return (
      <Stack alignItems={'center'} >
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'black'}
          fontSize={'3em'}
          mb={1}>
          {icon}
        </Flex>
        <Heading pb={2} as='h4' size='md'> {title}</Heading>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    );
};

const FeatureList = () => {
    return (
        <Center>
            <Box w={'70%'} >
                <SimpleGrid columns={3} spacing={10}>
                    <Feature
                    icon={<HiUserGroup />}
                    title={'Lifetime Support'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                    }
                    />
                    <Feature
                    icon={<HiUserGroup />}
                    title={'Unlimited Donations'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                    }
                    />
                    <Feature
                    icon={<HiUserGroup />}
                    title={'Instant Delivery'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                    }
                    />
                </SimpleGrid>
            </Box>
        </Center>
    )
}

export default FeatureList
