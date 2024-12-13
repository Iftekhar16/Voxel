import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ToDo = () => {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView className='bg-light3 p-5 flex-1'>
      <Text>Task {id}</Text>
    </SafeAreaView>
  );
};

export default ToDo;