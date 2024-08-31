import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Search, SlidersHorizontal, ChevronRight, Home, Package, List, Settings } from 'lucide-react-native';

const SalesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Products</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <SlidersHorizontal size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Search size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Total Products</Text>
          <Text style={styles.statValue}>128</Text>
          <Text style={styles.statChange}>+8.00%</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Stock in Hand</Text>
          <Text style={styles.statValue}>2,350</Text>
          <Text style={styles.statChange}>+2.34%</Text>
        </View>
      </View>

      <Text style={styles.listTitle}>Products list</Text>

      <ScrollView style={styles.productList}>
        {['Bags', 'Shoes', 'Clothings', 'Accessories'].map((category, index) => (
          <TouchableOpacity key={index} style={styles.productItem}>
            <View style={styles.productInfo}>
              <View style={[styles.productIcon, { backgroundColor: getColor(index) }]} />
              <Text style={styles.productName}>{category}</Text>
            </View>
            <View style={styles.productStats}>
              <Text style={styles.statPositive}>▲ {getPositiveStat(index)}</Text>
              <Text style={styles.statNegative}>▼ {getNegativeStat(index)}</Text>
            </View>
            <ChevronRight size={20} color="#999" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Home size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Package size={24} color="#3498db" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <List size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Settings size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    width: '48%',
  },
  statTitle: {
    fontSize: 14,
    color: '#666',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  statChange: {
    color: '#4CAF50',
    fontSize: 12,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productList: {
    flex: 1,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
  },
  productStats: {
    flexDirection: 'row',
    marginRight: 10,
  },
  statPositive: {
    color: '#4CAF50',
    marginRight: 5,
  },
  statNegative: {
    color: '#F44336',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: {
    alignItems: 'center',
  },
});

const getColor = (index) => {
  const colors = ['#E1F5FE', '#FFF3E0', '#FBE9E7', '#E8F5E9'];
  return colors[index % colors.length];
};

const getPositiveStat = (index) => {
  const stats = ['267', '124', '98', '456'];
  return stats[index % stats.length];
};

const getNegativeStat = (index) => {
  const stats = ['145', '87', '27', '234'];
  return stats[index % stats.length];
};

export default SalesScreen;