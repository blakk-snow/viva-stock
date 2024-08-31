import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../contexts/AuthContext';
import { Home, ShoppingBag, Settings } from 'lucide-react-native';

// Import your screens here
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';

import CategoriesForm from '../components/parts/CategoriesForm';
import InventoryForm from '../components/parts/InventoryForm';
import ProductsForm from '../components/parts/ProductsForm';
import SuppliersForm from '../components/parts/SuppliersForm';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
const StockForms = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Categories" component={CategoriesForm} options={{headerShown: false}}/>
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

const MainTab = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#0f172a', // slate-900
      },
      tabBarActiveTintColor: '#fca5a5', // red-300
      tabBarInactiveTintColor: '#fca5a5', // red-300 (same as active for consistent color)
      tabBarIcon: ({ color, size }) => {
        let icon;

        if (route.name === 'Home') {
          icon = <Home color={color} size={size} />;
        } else if (route.name === 'Products') {
          icon = <ShoppingBag color={color} size={size} />;
        } else if (route.name === 'Settings') {
          icon = <Settings color={color} size={size} />;
        }

        return icon;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
    <Tab.Screen name="Products" component={ProductsScreen} options={{headerShown: false}}/>
    <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>
  </Tab.Navigator>
);

const AppNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Main" component={MainTab} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;