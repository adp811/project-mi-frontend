import React from 'react';
import { FaInstagram, FaFacebookSquare, FaGithubAlt } from 'react-icons/fa';
import { Box, Flex, Stack, Button, Heading, IconButton } from '@chakra-ui/react';

const Home = () => {
    return (
        
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

                        <Button 
                            variant='outline'
                            size={'lg'}
                            colorScheme={'black'} >

                            Log In
                        </Button>

                        <Button 
                            variant='solid'
                            size={'lg'}
                            colorScheme={'white'}
                            bg={'black'} >

                            Sign Up
                        </Button>

                    </Stack>
                </Flex>

            </Flex>
      </Box>
    )
}

export default Home
