import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NativeBaseProvider} from 'native-base';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import AppNavigation from './navigations';
import {NETWORK_INTERFACE} from './constants/config';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: NETWORK_INTERFACE,
  cache,
});

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <AppNavigation />
      </NativeBaseProvider>
    </ApolloProvider>
  );
};

export default App;
