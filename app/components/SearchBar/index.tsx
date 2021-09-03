import React from 'react';
import {Input, Box, Button} from 'native-base';

import Search from '../../../assets/images/svg/search.svg';

type IProps = {
  value: string;
  onChange: Function;
};

const SearchBar = (props: IProps) => {
  const {value, onChange} = props;

  return (
    <Box py={3}>
      <Input
        variant="rounded"
        borderColor="white"
        color="white"
        py={1}
        placeholderTextColor="gray.300"
        placeholder="Search by name"
        value={value}
        onChangeText={text => {
          onChange(text);
        }}
        InputRightElement={
          <Button
            variant="ghost"
            p={0}
            mr={2}
            onPress={() => {
              console.log('red');
            }}>
            <Search width={24} height={24} color="#fff" />
          </Button>
        }
      />
    </Box>
  );
};

export default SearchBar;
