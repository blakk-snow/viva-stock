import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import sampleData from './sampleData';

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

  const renderProduct = ({ item }) => (
    <TouchableOpacity 
      style={styles.productItem}
      onPress={() => navigation.navigate('ProductDetails', { productId: item.id })}
    >
      <Text style={styles.productName}>{item.name}</Text>
      <Text>Category: {getCategory(item.category_id).name}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Price: ${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inventory</Text>
      
      <TextInput
        style={styles.searchInput}
        placeholder="Search products..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <View style={styles.filterContainer}>
        <Text>Filter by category: </Text>
        <TouchableOpacity onPress={() => setFilterCategory(null)}>
          <Text style={filterCategory === null ? styles.activeFilterButton : styles.filterButton}>All</Text>
        </TouchableOpacity>
        {sampleData.categories.map(category => (
          <TouchableOpacity key={category.id} onPress={() => setFilterCategory(category.id)}>
            <Text style={filterCategory === category.id ? styles.activeFilterButton : styles.filterButton}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.sortContainer}>
        <Text>Sort by: </Text>
        <TouchableOpacity onPress={() => setSortBy('name')}>
          <Text style={sortBy === 'name' ? styles.activeSortButton : styles.sortButton}>Name</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSortBy('quantity')}>
          <Text style={sortBy === 'quantity' ? styles.activeSortButton : styles.sortButton}>Quantity</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSortBy('price')}>
          <Text style={sortBy === 'price' ? styles.activeSortButton : styles.sortButton}>Price</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
      />

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate('AddProduct')}
      >
        <Text style={styles.addButtonText}>Add New Product</Text>
      </TouchableOpacity>
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
