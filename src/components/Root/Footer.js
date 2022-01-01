import React from 'react'
import { Box, Container, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Box
                bgGradient={'linear(to-r, #000428, #004e92)'}
                color={'white'}>
                <Container
                    as={Stack}
                    maxW={'10xl'}
                    py={5}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={'center'}>
                    <Stack direction={'row'} spacing={6}>
                        <Link to="/"> <Text fontSize={'18px'}>Home</Text> </Link>
                        <Link to="/"> <Text fontSize={'18px'}>About</Text> </Link>
                        <Link to="/"> <Text fontSize={'18px'}>Legal</Text> </Link>
                        <Link to="/"> <Text fontSize={'18px'}>Contact</Text> </Link>
                    </Stack>
                    <Text fontWeight={'600'}>© 2022 HutSpot. All rights reserved</Text>
                </Container>
            </Box>         
        </div>
    )
}

export default Footer