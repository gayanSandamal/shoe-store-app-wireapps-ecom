import { useLocalSearchParams } from "expo-router";
import React, { useState } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useFetchAllProductsQuery } from './../../api'
import { Product } from "@/types/Products";
import { Btn } from "@/components/Base/Button";
import Chip from "@/components/Base/Chip";

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState<string>('' as string)
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading } = useFetchAllProductsQuery({})
  const product = data.find((product: Product) => product.id === id)
  const {
    SKU,
    name,
    brandName,
    mainImage,
    price: { amount, currency },
    sizes,
    stockStatus,
    colour,
    description,
  } = product;

  const formattedPrice = `${amount} ${currency}`;

  const multicolours = ['green', 'yellow', 'white', 'purple', 'black', 'orange'];

  const onSizePress = (size: string) => {
    setSelectedSize(size)
    console.log('Selected size:', selectedSize);

  }

  return (
    <ScrollView className={`flex flex-col bg-gray-100 p-4`} contentContainerStyle={{ paddingBottom: 60 }}>
      <Image source={{ uri: mainImage }} className={`w-full h-64 object-cover rounded-lg mb-4`} />
      <View className={`flex flex-col bg-white rounded-lg p-4 pb-4`}>
        <Text className={`text-xl font-bold mb-2`}>{name}</Text>
        <View className="flex flex-row">
          <Chip title={brandName} bgColor="bg-indigo-500" color="text-white" />
        </View>
        <View className={`flex flex-row my-2`}>
          <Text className={`text-3xl font-semibold text-gray-700`}>{formattedPrice}</Text>
        </View>
        <View className="flex flex-row mb-4">
          <Text className='text-gray-500 mr-2'>Colour: {colour}</Text>
          {
            colour === 'multicoloured' ?
              multicolours.map((multicolour: string) => <View className="rounded mx-1" style={{ height: 20, width: 20, backgroundColor: multicolour }}></View>) :
              <View className="rounded" style={{ height: 20, width: 20, backgroundColor: colour }}></View>
          }
        </View>
        <Text className={`${stockStatus === 'IN STOCK' ? 'text-green-500' : 'text-red-600'}  font-bold my-2`}>{stockStatus}</Text>
        <View className={`flex flex-row items-center my-4`}>
          <Text className={`text-gray-500 mr-4`}>Sizes:</Text>
          {sizes.map((size: string) => (
            <Chip key={size} title={size} isActive={size == selectedSize} activeBgColor={'bg-gray-700'} activeColor={'text-white'} onPress={() => onSizePress(size)} />
          ))}
        </View>
        <View className="my-4">
          <Btn title="Add to Cart" bgColor="bg-green-600" color="text-white" onPress={() => { }} />
        </View>
        <View className="my-4">
          <Text className={`text-base mb-2`}>Description:</Text>
          <Text className={`text-gray-700`}>{description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductPage;
