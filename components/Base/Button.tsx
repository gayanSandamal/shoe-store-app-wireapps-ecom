import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BtnGroupProps, BtnLinkProps, BtnProps } from '@/types/Components';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, ButtonProps } from 'react-native';


export const Btn = (props: BtnProps) => {
  const colorScheme = useColorScheme();
  const { onPress, title = 'Save', color = Colors[colorScheme ?? 'light'].primary } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View className='rounded-md bg-white px-3 py-3 flex justify-center shadow-sm'>
        <Text className='font-semibold m-auto' style={{ color }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export const BtnGroup = (props: BtnGroupProps) => {
  const colorScheme = useColorScheme();
  const { buttons, onPress, color = Colors[colorScheme ?? 'light'].primary, selectedId } = props
  
  return (
    <ScrollView horizontal={true}>
      <View className="flex flex-row justify-between rounded-md shadow-sm bg-white">
        {buttons.map((btn, index) =>
          <TouchableOpacity key={btn.id || index} onPress={() => onPress(btn)} >
            <View className={`font-semibold m-auto px-3 py-3 rounded-md ${selectedId === btn.id && 'bg-purple-600'}`}>
              <Text className={`font-semibold m-auto ${selectedId === btn.id ? 'text-white' : 'text-gray-600'}`}>{btn.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

export const BtnLink = (props: BtnLinkProps) => {
  const colorScheme = useColorScheme();
  const { href = '', title = 'Save', color = Colors[colorScheme ?? 'light'].primary } = props;
  return (
    <Link href={href}>
      <View className={'rounded-md bg-white px-4 py-3 flex justify-center shadow-sm'}>
        <Text className='font-semibold m-auto px-3' style={{ color }}>{title}</Text>
      </View>
    </Link>
  );
}
