import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {HStack, Button, ArrowBackIcon, Heading, Center} from 'native-base';
import {ViewStyle} from 'react-native';

type Props = {
  hasBackIcon?: boolean;
  innerStyle?: ViewStyle;
  title?: string;
};

const Header = (props: Props) => {
  const {hasBackIcon = false, title, innerStyle = null} = props;
  const {goBack} = useNavigation();

  return (
    <HStack p={3} space={3} alignItems="center" style={innerStyle}>
      {hasBackIcon && (
        <Button
          size="xs"
          variant="ghost"
          position="absolute"
          ml={3}
          rounded="lg"
          p={0}
          onPress={() => {
            goBack();
          }}>
          <ArrowBackIcon size={5} color="white" />
        </Button>
      )}
      <Center flex={1} w="100%">
        <Heading size="md" color="white">
          {title}
        </Heading>
      </Center>
    </HStack>
  );
};

export default Header;
