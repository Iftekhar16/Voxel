import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Check } from '@tamagui/lucide-icons';
import { Checkbox } from '@tamagui/checkbox';

interface ITask {
  variant?: 1 | 2 | 'completed';
  taskTitle?: string;
  isSubtask?: boolean;
}

const Task = ({ variant=1, taskTitle='', isSubtask=false }: ITask) => {
  const [isChecked, setIsChecked] = useState(variant === 'completed');

  return (
    <View className={`flex gap-3 overflow-hidden ${variant===1?'rounded-lg p-3 pl-5 bg-light1':variant===2?'rounded-lg p-3 pl-5 bg-light2':variant==='completed'?'opacity-75':''} ${isSubtask?'flex-row-reverse pr-5':'flex-row'}`}>
      <View className='h-full flex flex-row flex-1 items-center'>
        <Text className={`flex-1 text-dark2 ${isChecked?'line-through text-dark2/70':''}`}>{taskTitle}</Text>
      </View>
      <Checkbox checked={isChecked} size="$6" backgroundColor={`${isChecked?'#FFFFFF':'#C6DEEB'}`} borderRadius={isSubtask?50:10} onCheckedChange={()=>{setIsChecked(!isChecked); console.log(isChecked)}}>
        <Checkbox.Indicator>
          <Check color='#454A58' />
        </Checkbox.Indicator>
      </Checkbox>
    </View>
  );
};

export default Task;