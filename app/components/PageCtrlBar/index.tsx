import React from 'react';
import {Box, Text, Center, Button, HStack, View} from 'native-base';

import PrevIcon from '../../../assets/images/svg/prev.svg';
import NextIcon from '../../../assets/images/svg/next.svg';

type IProps = {
  pageCount: number;
  disableNextBtn: boolean;
  increaseCount: Function;
  decreaseCount: Function;
};

const PageCtrlBar = (props: IProps) => {
  const {
    pageCount,
    disableNextBtn = false,
    increaseCount,
    decreaseCount,
  } = props;

  return (
    <Box w="100%" pb={3}>
      <Center w="100%" p={0}>
        <HStack
          w="30%"
          p={0}
          alignItems="center"
          justifyContent="space-between">
          <Button
            variant="ghost"
            p={0}
            disabled={pageCount > 1 ? false : true}
            onPress={() => {
              decreaseCount();
            }}>
            <PrevIcon width={20} height={20} color="#fff" />
          </Button>
          <View backgroundColor="rgba(0, 0, 0, 0.2)" px={5} borderRadius={100}>
            <Text color="white">{pageCount}</Text>
          </View>
          <Button
            p={0}
            variant="ghost"
            disabled={disableNextBtn ? true : false}
            onPress={() => {
              increaseCount();
            }}>
            <NextIcon width={20} height={20} color="#fff" />
          </Button>
        </HStack>
      </Center>
    </Box>
  );
};

export default PageCtrlBar;
