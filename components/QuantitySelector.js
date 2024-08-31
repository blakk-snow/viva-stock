
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
