import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-[#09090a]'>
      <Text className='font-inter-400 text-white'>Hello World</Text>
    </SafeAreaView>
  );
};
