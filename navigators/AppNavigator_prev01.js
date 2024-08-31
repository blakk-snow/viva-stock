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
    <Stack.Screen name="Inventory" component={InventoryForm} />
    <Stack.Screen name="Products" component={ProductsForm} />
    <Stack.Screen name="Suppliers" component={SuppliersForm} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Inventory" component={StockForms} options={{headerShown: false}}/>
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
);




const AppNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        // <Stack.Screen name="Main" component={MainTab} />
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;