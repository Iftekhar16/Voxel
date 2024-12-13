import React from 'react';
import { Accordion } from '@tamagui/accordion';
import { FlatList, View } from 'react-native';
import { dummyTodos } from '@/data/dummyTodos';
import Task from '@/components/common/Task';
import { ChevronDown } from '@tamagui/lucide-icons';
import { Text } from 'react-native';

const CompletedTasks = () => {
  return (
    <Accordion type='multiple'>
      <Accordion.Item value='completed1'>
        <Accordion.Trigger  backgroundColor='#E3ECF0' borderColor='#E3ECF0' padding={0} marginBottom={4}>
          {({ open }: { open: boolean }) => (
            <View className='flex flex-row items-center gap-1'>
              <Text className='flex-shrink flex flex-row text-sm'>Completed</Text>
              <ChevronDown animation='quick' size="$1" rotate={open ? '180deg' : '270deg'} className='mr-3'/>
            </View>
          )}
        </Accordion.Trigger>
        <Accordion.HeightAnimator animation='medium'>
          <Accordion.Content animation="medium" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} backgroundColor='#E3ECF0' padding={false} paddingInline={0}>
            <FlatList
              data={dummyTodos.slice(0, 5)}
              // keyExtractor={item => item.taskTitle.toString()}
              renderItem={({item})=> (
                <Task variant='completed' taskTitle={item.taskTitle} />
              )}
              ItemSeparatorComponent={() => <View className='h-3' />}
            />
          </Accordion.Content>
        </Accordion.HeightAnimator>
      </Accordion.Item>
    </Accordion>
  );
};

export default CompletedTasks;