import React, { useState } from 'react';
import { CalendarDays, Plus } from '@tamagui/lucide-icons';
import { Pressable, View, Text, TextInput } from 'react-native';
import { Sheet } from '@tamagui/sheet';
import { btn_ripple } from '@/const/androidRipple';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Button } from '@tamagui/button';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { dummyTodos } from '@/data/dummyTodos';
import Task from './Task';

const FAB = () => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      'task-title': '',
      'due-date': new Date()
    }
  });

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [modal, setModal] = useState(true);

  const [date, setDate] = useState<any>(new Date());
  const [mode, setMode] = useState<any>('date');
  const [isDateOpen, setIsDateOpen] = useState(false);

  const onOpenChange = (_event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setIsDateOpen(false);
    setDate(currentDate);
    setValue('due-date', currentDate);
  };
  const showMode = (currentMode: string) => {
    setIsDateOpen(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };

  const onSubmit = (formData: any) => {
    console.log(formData);
  }

  return (
    <View>
      <View className='size-16 rounded-full absolute bottom-5 right-5 z-50 overflow-hidden'>
        <Pressable
          className='size-16 flex justify-center items-center rounded-full bg-dark2'
          onPress={()=> setIsSheetOpen(true)}
          android_ripple={btn_ripple}
        >
          <Plus color='#FFF'/>
        </Pressable>
      </View>
      <Sheet
        forceRemoveScrollEnabled={isSheetOpen}
        modal={modal}
        snapPoints={[70]}
        open={isSheetOpen}
        onOpenChange={setIsSheetOpen}
      >
        <Sheet.Overlay
          animation="quick"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
          backgroundColor="#00000075"
        />
        <Sheet.Handle />
        <Sheet.Frame>
          <View className='bg-light1 px-5 py-6 flex-1 flex flex-col gap-3'>
            <View className='flex flex-col gap-3 mb-3'>
              <Controller 
                name="task-title"
                control={control}
                render={({ field: {onChange, value} }) => {
                  return (
                    <TextInput
                      className='bg-light2 px-5 py-3 rounded-lg placeholder:text-dark2/70'
                      placeholder='Task Title'
                      multiline
                      onChangeText={onChange}
                      value={value}
                    />
                  );
                }} 
              />
              <Pressable className='bg-light2 px-5 py-3 text-left rounded-lg flex flex-row items-center gap-3' onPress={showDatepicker}>
                <CalendarDays color='#454A5870' />
                <Text className='text-dark2/70'>Date: {date.toLocaleString()}</Text>
              </Pressable>
              {isDateOpen && (
                <Controller 
                  name="due-date"
                  control={control}
                  render={({ field: {onChange} }) => {
                    return (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onOpenChange}
                      />
                    );
                  }} 
                />
              )}
            </View>
            <View className='flex-1'>
              <View className='flex-1 mb-3'>
                <Text className="text-xl font-medium text-dark2 leading-tight mb-3">Subtasks</Text>
                <FlatList
                  data={dummyTodos}
                  keyExtractor={item => item.taskTitle.toString()}
                  renderItem={({item})=> (
                    <Task variant='completed' taskTitle={item.taskTitle} isSubtask={true} />
                  )}
                  ItemSeparatorComponent={() => <View className='h-3' />}
                />
              </View>
              <View className='overflow-hidden rounded-lg'>
                <Pressable className='bg-light4 flex flex-row justify-center items-center gap-3 px-5 py-3 rounded-lg' android_ripple={btn_ripple}>
                  <Text className='text-dark2 font-semibold text-center w-[100px]'>Add a Subtask</Text>  
                  <Plus color='#454A58' size={20} />
                </Pressable>
              </View>
            </View>
            <Pressable onPress={handleSubmit(onSubmit)} android_ripple={btn_ripple}>
              <Text className='bg-dark1 text-light1 font-semibold text-center px-5 py-3 rounded-lg'>Add Task</Text>  
            </Pressable>
          </View>
        </Sheet.Frame>
      </Sheet>
    </View>
  );
};

export default FAB;