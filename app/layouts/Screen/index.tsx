import React, {ReactElement} from 'react';
import {
  NativeBaseProvider,
  Box,
  ScrollView,
  Spinner,
  Center,
} from 'native-base';

import Header from '../../components/Header';

type IProps = {
  title?: string;
  hasHeader?: boolean;
  hasBackIcon?: boolean;
  isScrolling?: boolean;
  isLoading?: boolean;
  children: ReactElement;
  fullScreen?: boolean;
};

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const Screen = (props: IProps) => {
  const {
    title,
    hasHeader = false,
    hasBackIcon,
    isScrolling = false,
    isLoading = false,
    fullScreen = false,
  } = props;
  return (
    <NativeBaseProvider config={config}>
      <Box
        flex={1}
        w="100%"
        bg={{
          linearGradient: {
            colors: ['pink.400', 'indigo.900'],
            start: [0, 0],
            end: [1, 1],
          },
        }}>
        {hasHeader && <Header title={title} hasBackIcon={hasBackIcon} />}
        {isScrolling ? (
          <ScrollView px="5%" mb={10} showsVerticalScrollIndicator={false}>
            {props.children}
          </ScrollView>
        ) : (
          <Box flex={1} px={!fullScreen ? '5%' : 0} mb={!fullScreen ? 3 : 0}>
            {props.children}
          </Box>
        )}
      </Box>
      {isLoading && (
        <Box position="absolute" w="100%" h="100%" bg="black" opacity={0.8}>
          <Center flex={1}>
            <Spinner
              size="lg"
              color="primary.500"
              accessibilityLabel="Loading spinner"
            />
          </Center>
        </Box>
      )}
    </NativeBaseProvider>
  );
};

export default Screen;
