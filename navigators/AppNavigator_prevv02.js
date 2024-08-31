import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import your screen components
import HomeScreen from '../oldscreens/HomeScreen';
import MainScreen from '../oldscreens/MainScreen';
import InventoryScreen from '../oldscreens/InventoryScreen';
import AddProductScreen from '../oldscreens/AddProductScreen';
import EditProductScreen from '../oldscreens/EditProductScreen';
import SalesScreen from '../oldscreens/SalesScreen';
import ReportsScreen from '../oldscreens/ReportsScreen';
import SettingsScreen from '../oldscreens/SettingsScreen';
import InventoryStockScreen from '../oldscreens/InventoryStockScreen';
import InventoryManagementScreen from '../oldscreens/InventoryManagementScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function InventoryStack() {
  return (
    <Stack.Navigator initialRouteName='InventoryStockScreen'>
      <Stack.Screen name="InventoryStockScreen" component={InventoryStockScreen} options={{ headerShown: false}} />
      <Stack.Screen name="Inventory" component={InventoryScreen} options={{ headerShown: false}} />
      <Stack.Screen name="AddProduct" component={AddProductScreen} options={{ headerShown: false}} />
      <Stack.Screen name="EditProduct" component={EditProductScreen} options={{ headerShown: false}} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#fecaca', // slate-900 = 0f172a
        },
        tabBarActiveTintColor: '#0f172a', // red-300
        tabBarInactiveTintColor: '#0f172a', // red-300 (same as active for consistent color)
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Stock') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Sales') {
            iconName = focused ? 'cash' : 'cash-outline';
          } else if (route.name === 'Reports') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={MainScreen} options={{ headerShown: false}}/>
      <Tab.Screen name="Stock" component={InventoryStockScreen}  options={{ headerShown: false}}/>
      <Tab.Screen name="Sales" component={SalesScreen}  options={{ headerShown: false}}/>
      <Tab.Screen name="Reports" component={ReportsScreen}  options={{ headerShown: false}}/>
      <Tab.Screen name="Settings" component={SettingsScreen}  options={{ headerShown: false}}/>
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
      <MainTabs />
  );
}