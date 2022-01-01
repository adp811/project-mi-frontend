import React from 'react';
import { Box, Button, FormControl, Flex, Heading, Input, Stack, Text } from '@chakra-ui/react';
import SocialLinks from '../../components/Root/SocialLinks';

const ForgotPass = () => {
    return (

        <Stack pb={100} >
          
          <Box px={10} py={5}>
              <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                  <SocialLinks />
              </Flex>
          </Box>

          <Flex
            align={'center'}
            justify={'center'} >
            <Stack
              spacing={4}
              w={'full'}
              maxW={'md'}
              rounded={'xl'}
              boxShadow={'lg'}
              p={6}
              my={12}>
              <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                Forgot your password?
              </Heading>
              <Text
                fontSize={{ base: 'sm', sm: 'md' }} >
                You&apos;ll get an email with a reset link
              </Text>
              <FormControl id="email">
                <Input
                  placeholder="your-email@example.com"
                  _placeholder={{ color: 'gray.500' }}
                  type="email"
                />
              </FormControl>
              <Stack spacing={0}>
                <Button
                  variant={'solid'}
                  size={'lg'}
                  colorScheme={'white'} 
                  bgGradient={'linear(to-r, #000428, #004e92)'} >
                  Request Reset
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Stack> 
    )
};

export default ForgotPass
