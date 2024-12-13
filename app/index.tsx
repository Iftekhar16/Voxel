import React from 'react';
import { RelativePathString, router } from 'expo-router';
import { View, ScrollView, Appearance } from 'react-native';
import { Button } from '@tamagui/button';
import Banner from '@/components/common/Banner';
import TaskTabs from '@/components/screens/index/TaskTabs';
import CompletedTasks from '@/components/screens/index/CompletedTasks';
import Projects from '@/components/screens/index/Projects';
import FAB from '@/components/common/FAB';

export default function HomeScreen() {
  // useEffect(()=>{
  // })
  Appearance.setColorScheme('light');
  return (
    <View className='relative flex-1'>
      <ScrollView className='h-full bg-light3 p-5'>
        <View className='flex flex-col gap-3 mb-3'>
          <Banner title={`My\nTasks`} />
          <TaskTabs />
          <Projects />
          <CompletedTasks />
        </View>
        <View className='flex flex-col gap-3 mb-10'>
          <Button backgroundColor='#454A58' color='white' fontWeight={600} size='$5' onPress={() => router.push('/toDo/1' as RelativePathString)}>Go to To Do Page</Button>
          <Button backgroundColor='#454A58' color='white' fontWeight={600} size='$5' onPress={() => router.push('/projects' as RelativePathString)}>Go to Projects Page</Button>
          <Button backgroundColor='#454A58' color='white' fontWeight={600} size='$5' onPress={() => router.push('/project' as RelativePathString)}>Go to Project Page</Button>
          <Button backgroundColor='#454A58' color='white' fontWeight={600} size='$5' onPress={() => router.push('/today' as RelativePathString)}>Go to Today Page</Button>
          <Button backgroundColor='#454A58' color='white' fontWeight={600} size='$5' onPress={() => router.push('/task' as RelativePathString)}>Go to Task Page</Button>
        </View>
      </ScrollView>
      <FAB />
    </View>
  );
};
