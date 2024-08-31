import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';



const HomeScreen = ({ navigation }) => {
  const [metrics, setMetrics] = useState({
    totalValue: 0,
    productCount: 0,
    lowStockCount: 0,
    recentSales: 0,
  });

  useEffect(() => {
    // Fetch metrics from AsyncStorage or the state management solution
    const fetchMetrics = async () => {
      try {
        const storedMetrics = await AsyncStorage.getItem('shopMetrics');
        if (storedMetrics) {
          setMetrics(JSON.parse(storedMetrics));
        }
      } catch (error) {
        console.error('Error fetching metrics:', error);
      }
    };

    fetchMetrics();
  }, []);

  const renderMetricCard = (title, value, icon) => (
    <View style={styles.metricCard}>
      <Icon name={icon} size={24} color="#4a4a4a" />
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricTitle}>{title}</Text>
    </View>
  );

  const renderActionButton = (title, icon, onPress) => (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      <Icon name={icon} size={24} color="#ffffff" />
      <Text style={styles.actionButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={['#F8F8FF', '#F5F5F5', '#DCDCDC']} style={styles.container}>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      
      <View style={styles.metricsContainer}>
        {renderMetricCard('Total Value', `$${metrics.totalValue}`, 'attach-money')}
        {renderMetricCard('Products', metrics.productCount, 'inventory')}
        {renderMetricCard('Low Stock', metrics.lowStockCount, 'warning')}
        {renderMetricCard('Recent Sales', metrics.recentSales, 'trending-up')}
      </View>

      <View style={styles.actionsContainer}>
        {renderActionButton('Add Product', 'add-circle-outline', () => navigation.navigate('AddProduct'))}
        {renderActionButton('Record Sale', 'point-of-sale', () => navigation.navigate('RecordSale'))}
        {renderActionButton('View Inventory', 'list', () => navigation.navigate('Inventory'))}
      </View>
    </ScrollView>
    </LinearGradient>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  metricCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    width: '48%',
    marginBottom: 16,
    elevation: 2,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  metricTitle: {
    fontSize: 14,
    color: '#4a4a4a',
  },
  actionsContainer: {
    marginBottom: 24,
  },
  actionButton: {
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default HomeScreen;
