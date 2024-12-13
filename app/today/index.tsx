import Banner from '@/components/common/Banner';
import Task from '@/components/common/Task';
import CompletedTasks from '@/components/screens/index/CompletedTasks';
import { dummyTodos } from '@/data/dummyTodos';
import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

const Page = () => {
  return (
    <ScrollView className='h-full bg-light3 p-5'>
      <View className='mb-3'>
        <Banner title={`Tasks for\nThe Day`}/>
      </View>
      <View className='mb-3'>
        <FlatList 
          data={dummyTodos}
          renderItem={({item}) => <Task taskTitle={item.taskTitle} variant={1} />}
          ItemSeparatorComponent={()=><View className='h-3' />}
        />
      </View>
        <CompletedTasks />
    </ScrollView>
  );
};

export default Page;