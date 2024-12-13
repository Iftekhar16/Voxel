import React from 'react';
import { Text, View } from 'react-native';
import ProjectItem from './ProjectItem';
import { RelativePathString, router } from 'expo-router';
import { Button } from '@tamagui/button';

const Projects = () => {
  return (
    <View className='bg-light1 rounded-lg p-3'>
      <Text className='text-xl font-semibold mt-2 mb-3 mx-2'>Projects</Text>
      <View className='flex flex-col gap-3'>
        <ProjectItem projectTitle='Learning React Native' noOfSubtasks={14} variant={1} />
        <ProjectItem projectTitle='Learning React Native' noOfSubtasks={14} variant={1} />
        <ProjectItem projectTitle='Learning React Native' noOfSubtasks={14} variant={1} />
        {6 > 5 && (
          <Button backgroundColor='#C6DEEB' color='#454A58' fontWeight={600} size='$3' onPress={() => router.push('/projects' as RelativePathString)}>see all</Button>
        )}
      </View>
    </View>
  );
};

export default Projects;