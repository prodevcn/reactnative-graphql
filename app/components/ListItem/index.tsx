import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  VStack,
  HStack,
  Button,
  Pressable,
} from 'native-base';

import MoreIcon from '../../../assets/images/svg/more.svg';
import {ICharacter} from '../../screens/CharacterList';
type IProps = {
  data: ICharacter;
};

const ListItem = (props: IProps) => {
  const {data} = props;
  const navigation = useNavigation();

  return (
    <Pressable
      w="100%"
      backgroundColor="rgba(0, 0, 0, 0.2)"
      my={2}
      rounded="lg"
      p={2}
      onPress={() => {
        navigation.navigate('CharacterDetail', {data: data});
      }}>
      <HStack w="100%">
        <View w="30%">
          <Image
            size="sm"
            source={{uri: data.image}}
            borderRadius={100}
            resizeMode="repeat"
            alt="Charater Image"
          />
        </View>
        <VStack w="60%" justifyContent="center">
          <Text color="orange.400">Name</Text>
          <Text color="white">{data.name}</Text>
        </VStack>
        <VStack w="10%" justifyContent="flex-start">
          <Button
            p={0}
            variant="ghost"
            onPress={() => {
              navigation.navigate('CharacterDetail', {data: data});
            }}>
            <MoreIcon width={20} height={20} color="#fff" />
          </Button>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default ListItem;
