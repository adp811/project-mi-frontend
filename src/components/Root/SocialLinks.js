import React from 'react';
import { FaInstagram, FaFacebookSquare, FaGithubAlt } from 'react-icons/fa';
import { Flex, Stack, IconButton } from '@chakra-ui/react';

const SocialLinks = () => {
    return (
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
    )
}

export default SocialLinks
