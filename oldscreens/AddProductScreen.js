import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ProductCard } from '../components/CustomComponents'; // Make sure to import the ProductCard component
import { SearchInput, CustomPicker, Button } from '../components/Barebones';
import sampleData from '../services/sampleData';


const AddProductScreen = ({ navigation, route }) => {
  const [products, setProducts] = useState(sampleData.products);
  const [categories, setCategories] = useState(sampleData.categories);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const getCategory = (categoryId) => {
    return categories.find(category => category.id === categoryId) || { name: 'Unknown' };
  };

  const sortProducts = (products, sortBy) => {
    return [...products].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return getCategory(a.category_id).name.localeCompare(getCategory(b.category_id).name);
      } else if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'quantity') {
        return a.quantity - b.quantity;
      }
      return 0;
    });
  };

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      getCategory(product.category_id).name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const sortedAndFilteredProducts = sortProducts(filteredProducts, sortBy);

  useEffect(() => {
    // You could fetch real data here instead of using sampleData
    setProducts(sampleData.products);
    setCategories(sampleData.categories);
  }, []);

  return (
    <View className="flex-1 p-5">

      <Text className="text-2xl text-fuchsia-800 font-nunito-black">Products</Text>
      <SearchInput 
        placeholder="Search products" 
        value={searchQuery} 
        onChangeText={setSearchQuery}
      />
      <CustomPicker
        selectedValue={sortBy}
        onValueChange={(itemValue) => setSortBy(itemValue)}
        items={[
          { label: 'Name', value: 'name' },
          { label: 'Category', value: 'category' },
          { label: 'Price', value: 'price' },
          { label: 'Quantity', value: 'quantity' },
        ]}
      />
      <ScrollView>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onPress={() => navigation.navigate('ProductDetails', { productId: product.id })}
            getCategory={getCategory}
          />
        ))}
      </ScrollView>

{/* 
<ScrollView contentContainerStyle={styles.productList}>
  {filteredProducts.map(product => (
    <ProductCard
      key={product.id}
      product={{
        ...product,
        imageUrl: product.image_url, // Ensure this property name matches what ProductCard expects
        // If category name is needed in ProductCard, you can add it here
        category: getCategory(product.category_id).name
      }}
      onPress={() => navigation.navigate('ProductDetails', { productId: product.id })}
      onEdit={() => navigation.navigate('EditProduct', { productId: product.id })}
      getCategory={getCategory}

    />
  ))}
</ScrollView> */}

      <Button 
        title="Add New Product" 
        onPress={() => navigation.navigate('AddProduct')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... your styles ...
});

export default AddProductScreen;