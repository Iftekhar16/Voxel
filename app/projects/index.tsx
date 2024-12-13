import Banner from '@/components/common/Banner';
import ProjectItem from '@/components/screens/index/ProjectItem';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const Page = () => {
  return (
    <ScrollView className='h-full bg-light3 p-5'>
      <Banner title={`My\nProjects`} className='mb-3'/>
      <View className='flex flex-col gap-3'>
        <ProjectItem projectTitle='Learning React Native' noOfSubtasks={14} variant={2} />
        <ProjectItem projectTitle='Learning React Native' noOfSubtasks={14} variant={2} />
        <ProjectItem projectTitle='Learning React Native' noOfSubtasks={14} variant={2} />
        <ProjectItem projectTitle='Learning React Native' noOfSubtasks={14} variant={2} />
        <ProjectItem projectTitle='Learning React Native' noOfSubtasks={14} variant={2} />
        <ProjectItem projectTitle='Learning React Native' noOfSubtasks={14} variant={2} />
      </View>
    </ScrollView>
  );
};

export default Page;