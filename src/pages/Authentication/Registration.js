import React from 'react';
import { FaInstagram, FaFacebookSquare, FaGithubAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    IconButton,
    Heading,
    Text,
    useColorModeValue,
    Spacer
  } from '@chakra-ui/react';
  
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { useState } from 'react';

const Registration = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <Stack> 

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

                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Sign up to post a review!
                        </Heading>

                        <Spacer />                        

                    </Stack>

                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>

                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input type="text" />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName" isRequired>
                                        <FormLabel>Last Name</FormLabel>
                                        <Input type="text" />
                                    </FormControl>
                                </Box>
                            </HStack>

                            <FormControl id="email" isRequired>
                                <FormLabel>Email address (.edu only)</FormLabel>
                                <Input type="email" />
                            </FormControl>

                            <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} />
                                <InputRightElement h={'full'}>
                                    <IconButton
                                        icon={showPassword ? <MdOutlineVisibilityOff fontSize='1.15em' /> : <MdOutlineVisibility fontSize='1.15em' />}
                                        variant={'ghost'}
                                        onClick={() =>
                                        setShowPassword((showPassword) => !showPassword)
                                        }>
                                    </IconButton>
                                </InputRightElement>
                            </InputGroup>
                            </FormControl>
                           
                           <Stack spacing={10} pt={5}>
                                <Button
                                    loadingText="Submitting"
                                    size={'lg'}
                                    bg={'black'}
                                    color={'white'} >
                                    Sign up
                                </Button>
                            </Stack>
                                
                            <Stack pt={5}>
                                <Text align={'center'}>
                                    Already a user? <Link to="/auth/login" >Login</Link>
                                </Text>
                            </Stack>

                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </Stack>
    )
}

export default Registration
