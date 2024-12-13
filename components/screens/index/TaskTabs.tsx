import React from 'react';
import { Tabs } from '@tamagui/tabs';
import { FlatList, Text, View } from 'react-native';
import { dummyTodos } from '@/data/dummyTodos';
import Task from '@/components/common/Task';
import { RelativePathString, router } from 'expo-router';
import { Button } from '@tamagui/button';

const TaskTabs = () => {
  return (
    <Tabs style={{ backgroundColor: '#FFFFFF', width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: 8 }} defaultValue="tab1" width='unset' orientation='horizontal' >
      <Tabs.List style={{ width: '100%' }} >
        <Tabs.Tab value="tab1" style={{ height: 60, width: '50%', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
          <Text>Today</Text>
        </Tabs.Tab>
        <Tabs.Tab value="tab2" style={{ height: 60, width: '50%', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
          <Text>This Week</Text>
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Content style={{ padding: 12}} value="tab1">
        <FlatList
          data={dummyTodos.slice(0, 5)}
          keyExtractor={item => item.taskTitle.toString()}
          renderItem={({item})=> (
            <Task variant={2} taskTitle={item.taskTitle} />
          )}
          ItemSeparatorComponent={() => <View className='h-3' />}
        />
        {dummyTodos.length > 5 && (
          <Button backgroundColor='#C6DEEB' color='#454A58' size='$3' marginTop={12} onPress={() => router.push('/today' as RelativePathString)}>see all</Button>
        )}
      </Tabs.Content>
      <Tabs.Content style={{ paddingHorizontal: 20, paddingVertical: 12}} value="tab2">
        <Text>Profile2</Text>
      </Tabs.Content>
    </Tabs>
  );
};

export default TaskTabs;