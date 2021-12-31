import React from 'react';
import { FaInstagram, FaFacebookSquare, FaGithubAlt, FaEraser } from 'react-icons/fa';
import { Box, Flex, Stack, Button, IconButton, Heading, Spacer, Center } from '@chakra-ui/react';
import FeatureList from '../../components/Home/FeatureList';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        
        <Stack>

            <Box px={10} py={5}>

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

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={5}>
                            
                            <Link to="/auth/login">
                                <Button 
                                    variant='ghost'
                                    size={'lg'}
                                    colorScheme={'black'} >

                                    Log In
                                </Button>
                            </Link>
                        
                            <Link to="/auth/register">
                                <Button 
                                    variant='solid'
                                    size={'lg'}
                                    colorScheme={'white'}
                                    bgGradient={'linear(to-r, #000428, #004e92)'} >

                                    Sign Up
                                </Button>
                            </Link>

                        </Stack>
                    </Flex>

                </Flex>
        </Box>

        <Heading 
            size={'lg'} 
            fontSize={'125px'}
            bgClip={'text'}
            bgGradient={'linear(to-r, #000428, #004e92)'} > 
            HutSpot 
        </Heading>

        <Spacer />
        <Heading pt={7} as='h3' size='lg'> Read and write real reviews for landlords and rentals off campus. </Heading>
        <Spacer />

        


        <FeatureList />


      </ Stack>
    )
}

export default Home
