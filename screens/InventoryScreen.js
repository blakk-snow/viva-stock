import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const InventoryManagementScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  // Dummy data - replace with actual data fetching logic
  useEffect(() => {
    setProducts([
      { id: '1', name: 'Vegetables', inStock: 287, outOfStock: 148, icon: '🥕' },
      { id: '2', name: 'Sweet Food', inStock: 124, outOfStock: 87, icon: '🍰' },
      { id: '3', name: 'Snack', inStock: 88, outOfStock: 27, icon: '🍟' },
      { id: '4', name: 'Fruits', inStock: 450, outOfStock: 234, icon: '🍎' },
    ]);
  }, []);

  const filteredProducts = products
    .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(product => selectedCategory === 'All' || product.name === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'inStock') return b.inStock - a.inStock;
      if (sortBy === 'outOfStock') return b.outOfStock - a.outOfStock;
      return 0;
    });

  const totalProducts = products.reduce((sum, product) => sum + product.inStock + product.outOfStock, 0);
  const totalInStock = products.reduce((sum, product) => sum + product.inStock, 0);

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('EditProduct', { productId: item.id })}>
      <View style={styles.productIcon}>
        <Text style={styles.productIconText}>{item.icon}</Text>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.productStats}>
          <Text style={styles.inStock}>▲ {item.inStock}</Text>
          <Text style={styles.outOfStock}>▼ {item.outOfStock}</Text>
        </View>
      </View>
      <Icon name="chevron-right" size={24} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Products</Text>
        <TouchableOpacity onPress={() => {/* Implement sync logic */}}>
          <Icon name="sync" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
          <Icon name="add" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Icon name="search" size={24} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Total Products</Text>
          <Text style={styles.statValue}>{totalProducts}</Text>
          <Text style={styles.statChange}>+8.00%</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Stock in Hand</Text>
          <Text style={styles.statValue}>{totalInStock}</Text>
          <Text style={styles.statChange}>+2.34%</Text>
        </View>
      </View>

      <View style={styles.filterSort}>
        <Picker
          selectedValue={selectedCategory}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        >
          <Picker.Item label="All Categories" value="All" />
          {products.map(product => (
            <Picker.Item key={product.id} label={product.name} value={product.name} />
          ))}
        </Picker>
        <Picker
          selectedValue={sortBy}
          style={styles.picker}
          onValueChange={(itemValue) => setSortBy(itemValue)}
        >
          <Picker.Item label="Sort by Name" value="name" />
          <Picker.Item label="Sort by In Stock" value="inStock" />
          <Picker.Item label="Sort by Out of Stock" value="outOfStock" />
        </Picker>
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        style={styles.productList}
      />

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Icon name="list" size={24} color="#007AFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="assessment" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="settings" size={24} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  statItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    flex: 1,
    marginHorizontal: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  statChange: {
    fontSize: 12,
    color: '#4CAF50',
  },
  filterSort: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  picker: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  productList: {
    flex: 1,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,
    padding: 16,
  },
  productIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  productIconText: {
    fontSize: 24,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productStats: {
    flexDirection: 'row',
    marginTop: 4,
  },
  inStock: {
    color: '#4CAF50',
    marginRight: 8,
  },
  outOfStock: {
    color: '#F44336',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    alignItems: 'center',
  },
  activeNavItem: {
    borderTopWidth: 2,
    borderTopColor: '#007AFF',
  },
});

export default InventoryManagementScreen;