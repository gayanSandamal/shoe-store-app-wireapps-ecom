import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Chip = (props: any) => {
  const { title, bgColor = 'bg-gray-200', color = 'text-gray-700', onPress, isActive, activeBgColor = 'bg-gray-700', activeColor = 'text-white' } = props
  return (
    onPress ? <TouchableOpacity onPress={onPress}>
      <View className={`px-3 py-1 rounded mr-2 ${isActive ? activeBgColor : bgColor}`}>
        <Text className={`text-sm ${isActive ? activeColor : color} font-semibold text-center`}>{title}</Text>
      </View>
    </TouchableOpacity> :
      <View className={`px-3 py-1 rounded mr-2 ${bgColor}`}>
        <Text className={`text-sm ${color} font-semibold text-center`}>{title}</Text>
      </View>
  );
};

export default Chip;
