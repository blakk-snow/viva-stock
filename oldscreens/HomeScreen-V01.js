// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Container from '../components/Container';
import Tabs from '../components/TabLayoutFlat';
import { useAuth } from '../contexts/AuthContext';

import { PlusCircle, BarChart2, Package, FileText, Cog } from 'lucide-react-native';



// Import separate components for each tab
import DashboardContent from '../components/parts/DashboardContent';
import InventoryContent from '../components/parts/InventoryContent';
import ReportsContent from '../components/parts/ReportsContent';
import SettingsScreen from './SettingsScreen';

const HomeScreen = () => {
  const { user, logout } = useAuth();

  // const iconColor = '#9CA3AF'; // Light grey for icons
  const iconColor = '#4A044E'; // Light grey for icons
  const iconSize = 24;

  const tabs = [
    { 
      label: 'Dashboard', 
      content: <DashboardContent />,
      icon: <BarChart2 color={iconColor} size={iconSize} />
    },
    { 
      label: 'Inventory', 
      content: <InventoryContent />,
      icon: <Package color={iconColor} size={iconSize} />
    },
    { 
      label: 'Reports', 
      content: <ReportsContent />,
      icon: <FileText color={iconColor} size={iconSize} />
    },
    { 
      label: 'Settings', 
      content: <SettingsScreen />,
      icon: <Cog color={iconColor} size={iconSize} />
    },
  ];


  const handleLogout = async () => {
    try {
      await logout();
      // The user will be automatically redirected to the Login screen by the AppNavigator
    } catch (error) {
      console.error('Logout failed', error);
    }
  };



  return (
    <Container>
      {/* <NavBar links={links}/> */}
      <View className='flex-row justify-between items-center my-2'>
        <Text className="text-xs font-nunito-bold">Logged In As:</Text>
        <Text className="text-xs text-slate-900 font-nunito-extrabold">{user.username}</Text>
      </View>

 
      <Tabs tabs={tabs} />


    </Container>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   infoText: {
//     fontSize: 16,
//     marginBottom: 24,
//   },
// });


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#1F2937', // Dark background for tabs
  },
  tab: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#3B82F6', // Blue indicator for active tab
  },
  tabContent: {
    alignItems: 'center',
  },
  tabText: {
    color: '#9CA3AF', // Light grey for inactive text
    marginTop: 4,
    fontSize: 12,
  },
  activeTabText: {
    color: '#3B82F6', // Blue text for active tab
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
});


export default HomeScreen;


