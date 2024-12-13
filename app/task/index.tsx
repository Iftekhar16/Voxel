import Task from '@/components/common/Task';
import { dummyTodos } from '@/data/dummyTodos';
import { Button } from '@tamagui/button';
import { Calendar } from '@tamagui/lucide-icons';
import React from 'react';
import { FlatList, ScrollView, Text, TextInput, View } from 'react-native';

const Page = () => {
  return (
    <ScrollView className='h-full bg-light3 p-5'>
      <Text className='text-3xl font-medium text-dark2 leading-tight mb-3'>Learning React Native</Text>
      <View className='flex flex-col gap-2 mb-7'>
        <View className='flex flex-row items-center gap-3'>
          <Calendar color="#454A58"/>
          <Text className='text-dark2/70'>by 12 AM, Tuesday</Text>
        </View>
      </View>
      <View className='bg-light1 rounded-lg p-3'>
        <Text className='text-xl font-semibold mt-2 mb-3 mx-2'>Subtasks</Text>
        <View className='mb-3'>
          <FlatList
            data={dummyTodos.slice(0, 5)}
            keyExtractor={item => item.taskTitle.toString()}
            renderItem={({item})=> (
              <Task variant={2} taskTitle={item.taskTitle} isSubtask={true} />
            )}
            ItemSeparatorComponent={() => <View className='h-3' />}
          />
        </View>
        <View className='flex flex-col gap-3'>
          <TextInput className='bg-light2 px-5 py-3 rounded-lg' placeholder='Add a subtask' multiline />
          <Button className='bg-dark2 w-full rounded-lg px-5 py-3 text-light1 text-semibold'>Add</Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Page;