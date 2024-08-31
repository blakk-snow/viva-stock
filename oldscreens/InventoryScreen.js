import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import sampleData from '../services/sampleData';
import { Button, SearchInput } from '../components/Barebones';

const InventoryScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterCategory, setFilterCategory] = useState(null);

  const getCategory = (categoryId) => {
    return sampleData.categories.find(category => category.id === categoryId);
  };

  const filteredProducts = sampleData.products
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(product => filterCategory ? product.category_id === filterCategory : true)
    .sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inventory</Text>
      
      <SearchInput
        placeholder="Search products..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{ flexGrow: 1, marginBottom: 12 }}>
        <Text className="text-lg text-fuchsia-950 font-nunito-extrabold">Filter by category: </Text>
        <TouchableOpacity onPress={() => setFilterCategory(null)}>
          <Text
          className={`ml-3 font-nunito text-lg ${
            filterCategory === null ? 'font-nunito-black text-slate-950' 
              : 'font-nunito-regular text-gray-700'
          }`}
          >All</Text>
        </TouchableOpacity>

          {sampleData.categories.map(category => (
            <TouchableOpacity key={category.id} onPress={() => setFilterCategory(category.id)}>
              <Text 
                className={`ml-3 font-nunito-regular text-lg ${
                  filterCategory === category.id 
                    ? 'font-nunito-black text-slate-950' 
                    : 'font-nunito-regular text-gray-500'
                }`}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

      <View style={styles.sortContainer}>
        <Text className="font-nunito-black text-fuchsia-950">Sort by: </Text>
        <TouchableOpacity onPress={() => setSortBy('name')}>
          <Text 
          //style={sortBy === 'name' ? styles.activeSortButton : styles.sortButton}
            className={`ml-3 text-slate-600 text-base font-nunito-blask ${
              sortBy === 'name'
                ? 'ml-3 font-nunito-regular text-gray-500'
                : ''
            }`}
          >Name</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSortBy('quantity')}>
          <Text 
            className={`ml-3 text-slate-600 text-base font-nunito-black ${
              sortBy === 'name'
                ? 'ml-3 font-nunito-regular text-gray-500'
                : ''
            }`}>Quantity</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSortBy('price')}>
          <Text
              className={`ml-3 text-slate-600 text-base font-nunito-black ${
                sortBy === 'name'
                  ? 'ml-3 font-nunito-regular text-gray-500'
                  : ''
              }`}
          >Price</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {filteredProducts.map(product => (
          <TouchableOpacity 
            key={product.id} 
            style={styles.productItem}
            
            onPress={() => navigation.navigate('ProductDetails', { productId: product.id })}
          >
            <Text style={styles.productName}>{product.name}</Text>
            <Text>Category: {getCategory(product.category_id).name}</Text>
            <Text>Quantity: {product.quantity}</Text>
            <Text>Price: ${product.price.toFixed(2)}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>


      <Button onPress={() => navigation.navigate('AddProduct')} title="Add New Product" />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  filterButton: {
    marginLeft: 10,
    color: 'blue',
  },
  activeFilterButton: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'blue',
  },
  sortContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  sortButton: {
    marginLeft: 10,
    color: 'blue',
  },
  activeSortButton: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'blue',
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productName: {
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default InventoryScreen;