import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentSection } from '@/components/Wrappers/Sections';
import { CategoriesStrip } from '@/components/Product/Categories';

import { useFetchAllProductsQuery } from '../../api'
import { Products } from '@/components/Product/Products';
import { getUniqueCategories } from '@/utils/category.utils';
import { Product } from '@/types/Products';
import { BtnProps } from '@/types/Components';
import SearchBar from '@/components/Base/SearchBar';
import { router } from 'expo-router';

const ShopScreen = () => {
  const { data, isLoading } = useFetchAllProductsQuery({})
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | number | undefined>()
  const [searchQuery, setSearchQuery] = useState<string>("")

  const onPressCategory = (category: BtnProps) => {
    if (selectedCategoryId === category.id) {
      setSelectedCategoryId(undefined)
      return true
    }
    setSelectedCategoryId(category.id)
  }

  const filteredData = selectedCategoryId || searchQuery ? data.filter((product: Product) => selectedCategoryId === product.brandName || product.name.toLowerCase().includes(searchQuery.toLowerCase())) : data

  const searchSection = <SearchBar placeholder="Search for products" onSubmit={setSearchQuery} />

  const categoriesSection = <CategoriesStrip categories={getUniqueCategories(data)} onCategoryPress={onPressCategory} selectedCategoryId={selectedCategoryId} />

  const navigateToProduct = (product: Product) => {
    router.push({ pathname: '/product/[id]', params: { id: product.id, title: product.name } });
  }

  const productsSection = <Products products={filteredData} isLoading={isLoading} onPress={navigateToProduct} />

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <View className="px-4">
          {/* search section */}
          <ContentSection slot={searchSection} cardMode={false} />
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