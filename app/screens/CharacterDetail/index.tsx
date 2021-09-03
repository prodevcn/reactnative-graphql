import React, {useState} from 'react';
import {
  VStack,
  Box,
  Heading,
  Text,
  Image,
  HStack,
  ScrollView,
  Button,
} from 'native-base';

import Screen from '../../layouts/Screen';

import UpIcon from '../../../assets/images/svg/up.svg';
import DownIcon from '../../../assets/images/svg/down.svg';

const CharacterDetail = ({route}: any) => {
  const data = route.params.data;
  const [expanded, setExpanded] = useState(false);

  return (
    <Screen hasHeader title="Character Detail" hasBackIcon fullScreen>
      <VStack w="100%" flex={1}>
        <Box flex={1} />
        <Box
          flex={6}
          pb={5}
          mt={50}
          backgroundColor="rgba(0, 0, 0, 0.4)"
          w="100%"
          borderTopRadius={20}>
          <HStack w="100%" justifyContent="center">
            <Image
              size="lg"
              top="-15%"
              source={{uri: data.image}}
              borderColor="blueGray.700"
              borderWidth={5}
              borderRadius={100}
              alt="Charater Image"
            />
          </HStack>
          <ScrollView showsVerticalScrollIndicator={false} px={10} pb={10}>
            <VStack w="100%" mb={3}>
              <Heading size="sm" color="orange.400">
                NAME
              </Heading>
              <Heading size="md" color="white">
                {data.name}
              </Heading>
            </VStack>
            <VStack w="100%" mb={3}>
              <Heading size="sm" color="orange.400">
                GENDER
              </Heading>
              <Heading size="md" color="white">
                {data.gender}
              </Heading>
            </VStack>
            <VStack w="100%" mb={3}>
              <Heading size="sm" color="orange.400">
                SEPECIES
              </Heading>
              <Heading size="md" color="white">
                {data.species}
              </Heading>
            </VStack>
            <HStack space={3} w="100%" mb={3}>
              <Heading size="sm" color="orange.400">
                EPISODES
              </Heading>
              <Button
                p={0}
                variant="ghost"
                onPress={() => {
                  setExpanded(prev => !prev);
                }}>
                {expanded ? (
                  <UpIcon width={20} height={20} color="#fb923c" />
                ) : (
                  <DownIcon width={20} height={20} color="#fb923c" />
                )}
              </Button>
            </HStack>
            {expanded &&
              data?.episode.map((item: any) => (
                <HStack
                  key={item.id}
                  w="100%"
                  mb={3}
                  justifyContent="space-between">
                  <Box w="50%">
                    <Text color="white">{item.name}</Text>
                  </Box>
                  <Box w="50%">
                    <Text color="gray.500">{item.air_date}</Text>
                  </Box>
                </HStack>
              ))}
          </ScrollView>
        </Box>
      </VStack>
    </Screen>
  );
};

export default CharacterDetail;
