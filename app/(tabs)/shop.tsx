import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentSection } from '@/components/Wrappers/Sections';
import { CategoriesStrip } from '@/components/Product/Categories';

import { useFetchAllProductsQuery } from './../../api'
import { Products } from '@/components/Product/Products';
import { getUniqueCategories } from '@/utils/category.utils';
import { Category, Product } from '@/types/Products';
import { BtnProps } from '@/types/Components';

const ShopScreen = () => {
  const { data, isLoading } = useFetchAllProductsQuery({});
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | number | undefined>()

  const onPressCategory = (category: BtnProps) => {
    if (selectedCategoryId === category.id) {
      setSelectedCategoryId(undefined)
      return true
    }
    setSelectedCategoryId(category.id)
  }

  const filteredData = selectedCategoryId ? data.filter((product: Product) => selectedCategoryId === product.brandName) : data

  const categoriesSection = <CategoriesStrip categories={getUniqueCategories(data)} onCategoryPress={onPressCategory} selectedCategoryId={selectedCategoryId} />

  const productsSection = <Products products={filteredData} isLoading={isLoading} onPress={() => { }} />

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-4">
          {/* categories section */}
          <ContentSection title="Quick Filter by Categories" slot={categoriesSection} cardMode={false} />
          {/* Recommendations section */}
          <ContentSection title="All Products" slot={productsSection} cardMode={false} />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ShopScreen;