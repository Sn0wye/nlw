import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export const Loading = () => {
  return (
    <View className='flex-1 items-center justify-center bg-[#09090a]'>
      <ActivityIndicator color='#7C3AED' />
    </View>
  );
};
