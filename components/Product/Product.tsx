import { ProductProps } from '@/types/Products';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 120,
  },
})

export const ProductCard = (props: ProductProps) => {
  const { product, onPress } = props
  return (
    <TouchableOpacity className='basis-1/2 p-1' onPress={() => onPress(product)}>
      <View className='rounded-xl shadow bg-white mb-2 p-5'>
        <Image
          className='rounded-xl overflow-hidden'
          style={styles.image}
          source={{ uri: product.mainImage }}
        />
      </View>
      <View className='flex flex-row'>
        <Text className='text-lg font-semibold text-gray-700'>{product.price.amount} {product.price.currency}</Text>
      </View>
      <View className='flex flex-row'>
        <Text className='text-xs font-normal text-gray-700'>{product.name}</Text>
      </View>
    </TouchableOpacity>
  )
}