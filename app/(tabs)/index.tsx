import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Vivid } from '@/components/Wrappers/Offer';
import { ContentSection } from '@/components/Wrappers/Sections';
import { NEW_COLLECTION } from '@/constants/ExternalAssets';
import { CategoriesStrip } from '@/components/Product/Categories';

import { useFetchAllProductsQuery } from './../../api'
import { Products } from '@/components/Product/Products';
import { getUniqueCategories } from '@/utils/category.utils';

const HomeScreen = () => {
  const { data, isLoading } = useFetchAllProductsQuery({});

  const welcomeSection = <View className="p-6 flex items-start">
    <Text className="text-slate-500">Welcome back!</Text>
    <Text className="mt-2 text-2xl font-medium text-gray-700">
      Gayan
    </Text>
  </View>

  const offerSection = <Vivid title="New Collecti\on" subtitleLine1="Discount 50% for" subtitleLine2="the first transaction" button={{ title: 'Shop Now', href: "/shop" }} bgImgUri={NEW_COLLECTION} />

  const categoriesSection = <CategoriesStrip categories={getUniqueCategories(data)} onCategoryPress={() => {}} />

  const productsSection = <Products products={data} isLoading={isLoading} onPress={() => { }} />

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-4">
          {/* greeting section  */}
          <ContentSection slot={welcomeSection} />
          {/* offer section */}
          <ContentSection slot={offerSection} />
          {/* categories section */}
          <ContentSection title="Categories" slot={categoriesSection} link={{ title: 'View All', href: '/categories' }} cardMode={false} />
          {/* Recommendations section */}
          <ContentSection title="Recommendations" slot={productsSection} link={{ title: 'View All', href: '/shop' }} cardMode={false} />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;