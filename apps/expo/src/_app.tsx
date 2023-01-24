/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TRPCProvider } from './utils/api';

import { Home } from './screens/home';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';
import { Loading } from './components/Loading';

export const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <TRPCProvider>
      <SafeAreaProvider>
        <Home />
        <StatusBar style='light' backgroundColor='transparent' translucent />
      </SafeAreaProvider>
    </TRPCProvider>
  );
};
