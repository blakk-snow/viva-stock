import React, { useState } from 'react';
import { ScrollView,View, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Navbar, Textbox, Button, CustomPicker, Footer, Logo } from '../components/Barebones';
import NamedGreeting from '../utils/NamedGreeting';
import { Ionicons } from '@expo/vector-icons';
import Tabs from '../components/Tabs';
import { PlusCircle, BarChart2, Package, FileText, Cog } from 'lucide-react-native';

import AddProductScreen from './AddProductScreen';
import InventoryScreen from './InventoryScreen';
import ReportsScreen from './ReportsScreen';



export default function InventoryStockScreen() {
    const iconColor = '#4A044E'; // Light grey for icons
    const iconSize = 24;
  
    const tabs = [

      { 
        label: 'Category', 
        content: <AddProductScreen />,
        icon: <Package color={iconColor} size={iconSize} />
      },
      { 
        label: 'Product', 
        content: <ReportsScreen />,
        icon: <FileText color={iconColor} size={iconSize} />
      },
      { 
        label: 'Inventory', 
        content: <InventoryScreen />,
        icon: <Cog color={iconColor} size={iconSize} />
      },
    ];

    
  return (
    <Container>

        <Navbar title="Inventory" onMenuPress={() => {/* Handle menu press */}} />
        <Logo />
            {/* <Text>Some Text Here</Text> */}
        <Tabs tabs={tabs}/>

    </Container>
  )
}