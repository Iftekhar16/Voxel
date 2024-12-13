import React from 'react';
import { RelativePathString, router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

interface IProjectItem {
  variant?: 1 | 2;
  projectTitle: string;
  noOfSubtasks: number;
}

const ProjectItem = ({ variant=1, projectTitle ,noOfSubtasks }: IProjectItem) => {
  return (
    <Pressable className={`flex flex-col rounded-lg px-5 py-3 ${variant===1?"bg-light2":variant===2?"bg-light1":""}`} onPress={() => router.push('/projects' as RelativePathString)}>
      <Text className='font-semibold mb-1'>{projectTitle}</Text>
      <Text className='text-sm text-dark1 mb-3'>{noOfSubtasks} subtasks</Text>
      <View className='relative w-full h-5 rounded-full bg-light4'>
        <View className='absolute top-0 left-0 w-[70%] h-5 bg-dark1 rounded-full' />
      </View>
    </Pressable>
  );
};

export default ProjectItem;