import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Package, BarChart2, Settings, PlusCircle, DollarSign, List } from 'lucide-react-native';

// Import screen components here
import HomeScreen from '../screens/HomeScreen';
import InventoryScreen from '../screens/InventoryScreen';
import ProductManagerScreen from '../screens/ProductManagerScreen';
import SalesManagerScreen from '../screens/SalesManagerScreen';
import ReportsScreen from '../screens/ReportsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SetupAccountScreen from '../screens/SetupAccountScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const InventoryStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="InventoryMain" component={InventoryScreen} options={{ title: 'Inventory' }} />
    <Stack.Screen name="ProductMain" component={ProductManagerScreen} options={{ title: 'Add New Product' }} />
  </Stack.Navigator>
);

const SalesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="SalesMain" component={SalesManagerScreen} options={{ title: 'Sales' }} />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
      }}
    />
    <Tab.Screen 
      name="Inventory" 
      component={InventoryStack}
      options={{
        tabBarIcon: ({ color, size }) => <Package color={color} size={size} />,
      }}
    />
    <Tab.Screen 
      name="Sales" 
      component={SalesStack}
      options={{
        tabBarIcon: ({ color, size }) => <DollarSign color={color} size={size} />,
      }}
    />
    <Tab.Screen 
      name="Reports" 
      component={ReportsScreen}
      options={{
        tabBarIcon: ({ color, size }) => <BarChart2 color={color} size={size} />,
      }}
    />
    <Tab.Screen 
      name="Settings" 
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="AccountSetup" component={SetupAccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
);

export default AppNavigator;
