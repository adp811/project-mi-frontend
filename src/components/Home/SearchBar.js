import React from 'react';
import { Input, InputGroup, InputLeftElement, Center } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = () => {
    return (
        <InputGroup alignSelf={'center'} w={'45%'} >
            <InputLeftElement
                my={10}
                pointerEvents='none'
                children={<SearchIcon color='gray.300'/>} />
            <Input 
                my={10}
                placeholder={'enter an address to get started'}
                focusBorderColor={'#000428'} />
        </InputGroup>
    )
}

export default SearchBar
