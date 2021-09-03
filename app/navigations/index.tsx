import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CharacterList from '../screens/CharacterList';
import CharacterDetail from '../screens/CharacterDetail';

export type RootStackParamList = {
  CharacterList: undefined;
  CharacterDetail: {data: any};
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CharacterList">
        <Stack.Screen
          name="CharacterList"
          component={CharacterList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
