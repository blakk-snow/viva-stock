import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// ProductCard Component
// export const ProductCard = ({ product, onPress, getCategory }) => (
//   <TouchableOpacity style={styles.productCard} onPress={onPress}>
//     <Image 
//       source={{ uri: product.imageUrl || '../assets/100.png' }} 
//       style={styles.productImage}
//     />
//     <View style={styles.productInfo}>
//       <Text style={styles.productName}>{product.name}</Text>
//       <Text>Category: {getCategory(product.category_id).name}</Text>
//       <Text>Quantity: {product.quantity}</Text>
//       <Text>Price: ${product.price.toFixed(2)}</Text>
//     </View>
//     <Ionicons name="chevron-forward" size={24} color="#888" />
//   </TouchableOpacity>
// );



export const ProductCard = ({ product, onPress, getCategory }) => (
    <TouchableOpacity className="flex-row p-2 bg-red-200 rounded-xl mb-3 items-center shadow-lg shadow-black" onPress={onPress}>
        <Image 
        source={product.imageUrl ? { uri: product.imageUrl } : require('../assets/100.png')}
        style={styles.productImage}
        />

      <View className="flex-1">
        <Text className="text-base font-nunito-bold mb-1">{product.name}</Text>
        <CategoryPill category={getCategory(product.category_id).name} />
        <Text>Quantity: {product.quantity}</Text>
        <PriceTag price={product.price} />
      </View>
      <Ionicons name="chevron-forward" size={24} color="#888" />
    </TouchableOpacity>
  );

// QuantitySelector Component
export const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => (
  <View style={styles.quantitySelector}>
    <TouchableOpacity onPress={onDecrease} style={styles.quantityButton}>
      <Ionicons name="remove" size={24} color="#007AFF" />
    </TouchableOpacity>
    <Text style={styles.quantityText}>{quantity}</Text>
    <TouchableOpacity onPress={onIncrease} style={styles.quantityButton}>
      <Ionicons name="add" size={24} color="#007AFF" />
    </TouchableOpacity>
  </View>
);

// MetricDisplay Component
export const MetricDisplay = ({ title, value, icon }) => (
  <View style={styles.metricDisplay}>
    <Ionicons name={icon} size={24} color="#007AFF" />
    <Text style={styles.metricTitle}>{title}</Text>
    <Text style={styles.metricValue}>{value}</Text>
  </View>
);

// CategoryPill Component
export const CategoryPill = ({ category }) => (
  <View className="bg-fuchsia-500 rounded-2xl py-1 px-2 mr-1">
    <Text style={styles.categoryText}>{category}</Text>
  </View>
);

// PriceTag Component
export const PriceTag = ({ price }) => (
  <View style={styles.priceTag}>
    <Text style={styles.priceText}>${price.toFixed(2)}</Text>
  </View>
);

const styles = StyleSheet.create({
  productCard: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    overflow: 'hidden',
  },
  quantityButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  quantityText: {
    paddingHorizontal: 20,
    fontSize: 16,
  },
  metricDisplay: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    margin: 5,
  },
  metricTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  categoryPill: {
    backgroundColor: '#007AFF',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
  },
  priceTag: {
    backgroundColor: '#4CAF50',
    borderRadius: 4,
    padding: 5,
  },
  priceText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});