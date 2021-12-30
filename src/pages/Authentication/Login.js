import React from 'react';
import { FaInstagram, FaFacebookSquare, FaGithubAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Text,
    Stack,
    Button,
    Heading,
    Spacer, 
    IconButton, 
    Divider
  } from '@chakra-ui/react';
import reactDom from 'react-dom';

const Login = () => {
    return (

        <Stack spacing={0}> 

          <Box px={10} pt={5} pd ={2} >

            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={2}>

                    <IconButton
                        icon={<FaInstagram fontSize='1.35em' />}
                        size={'lg'}
                        bg={'white'} >
                    </IconButton>

                    <IconButton
                        icon={<FaFacebookSquare fontSize='1.35em' />}
                        size={'lg'}
                        bg={'white'} >
                    </IconButton>

                    <IconButton
                        icon={<FaGithubAlt fontSize='1.35em' />}
                        size={'lg'}
                        bg={'white'} >
                    </IconButton>

                    </Stack>
                </Flex>
            </Flex>
          </Box>

          <Flex
              align={'center'}
              justify={'center'} >

          <Stack 
              spacing={8} 
              mx={'auto'} 
              maxW={'lg'} 
              px={6}>

            <Stack align={'center'}>

              <Heading fontSize={'4xl'}>Sign in to your account!</Heading>
              <Spacer />


            </Stack>

            <Box
              rounded={'lg'}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>

                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>

                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" />
                </FormControl>

                <Spacer />

                <Button
                  variant={'solid'}
                  size={'lg'}
                  bg={'black'}
                  color={'white'} >
                  Sign in
                </Button>

                <Stack spacing={3}>

                  <Stack
                    pt={3}
                    direction={{ base: 'column', sm: 'row' }}
                    align={'center'}
                    justify={'space-between'}>
                    <Spacer />
                    <Link to="auth/forgot">
                      <Text>Forgot Password?</Text>
                    </Link>
                    <Spacer />                
                  </Stack>

                  <Spacer />
                  <Divider />
           
                  <Link to="/auth/register">
                    <Button
                      variant={'ghost'}
                      size={'lg'}
                      color={'black'} >
                      Create an Account
                    </Button>
                  </Link>
                  
                </Stack>

              </Stack>
            </Box>
          </Stack>
        </Flex>

      </Stack>
    )
};

export default Login
