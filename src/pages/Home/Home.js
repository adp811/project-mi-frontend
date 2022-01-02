import React from 'react';
import { Box, Flex, Stack, Button, Heading, Spacer, Divider } from '@chakra-ui/react';
import FeatureList from '../../components/Home/FeatureList';
import SocialLinks from '../../components/Root/SocialLinks';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/Home/SearchBar';

const Home = () => {
    return ( 
        <Stack>
            <Box px={10} py={5}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

                    <SocialLinks/>

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

        <Heading pt={7} as='h3' size='lg'> Read and write real reviews for landlords and rentals off campus. </Heading>
        
        <SearchBar />
        <FeatureList />   

        <Box w={'100%'} h={10} ></Box> 

      </ Stack>
    )
}

export default Home
