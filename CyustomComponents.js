// ProductCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductCard = ({ product, onPress, onEdit }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.stock}>In stock: {product.quantity}</Text>
      </View>
      <TouchableOpacity style={styles.editButton} onPress={onEdit}>
        <Ionicons name="pencil" size={24} color="#007AFF" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#007AFF',
    marginTop: 4,
  },
  stock: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});

export default ProductCard;

// QuantitySelector.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const QuantitySelector = ({ quantity, onIncrease, onDecrease, min = 0, max = Infinity }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={onDecrease} 
        disabled={quantity <= min}
        style={[styles.button, quantity <= min && styles.disabledButton]}
      >
        <Ionicons name="remove" size={24} color={quantity <= min ? '#ccc' : '#007AFF'} />
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity 
        onPress={onIncrease} 
        disabled={quantity >= max}
        style={[styles.button, quantity >= max && styles.disabledButton]}
      >
        <Ionicons name="add" size={24} color={quantity >= max ? '#ccc' : '#007AFF'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    overflow: 'hidden',
  },
  button: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  disabledButton: {
    backgroundColor: '#f9f9f9',
  },
  quantity: {
    paddingHorizontal: 20,
    fontSize: 16,
  },
});

export default QuantitySelector;

// MetricsDisplay.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const MetricCard = ({ title, value, icon, color = '#007AFF' }) => {
  return (
    <View style={[styles.card, { borderColor: color }]}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={24} color={color} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.value, { color }]}>{value}</Text>
      </View>
    </View>
  );
};

export const MetricsRow = ({ metrics }) => {
  return (
    <View style={styles.row}>
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
  },
  iconContainer: {
    marginRight: 15,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default { MetricCard, MetricsRow };
