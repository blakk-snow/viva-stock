import React, { useState } from 'react';
import { ScrollView,View, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Navbar, Textbox, Button, CustomPicker, Footer, Logo } from '../components/Barebones';
import NamedGreeting from '../utils/NamedGreeting';
import { Ionicons } from '@expo/vector-icons';




const OptionItem = ({ icon, label, onPress }) => (
    <TouchableOpacity onPress={onPress} className="bg-gray-100 flex-row items-center py-2 px-4 mb-2 rounded-lg">
      <Ionicons name={icon} size={24} style={{color: "#3b82f6", marginRight: 16}} />
      <Text className="text-sm font-nunito-semibold flex-1 text-gray-800">{label}</Text>
      <Ionicons name="chevron-forward" size={24} className="text-gray-500" />
    </TouchableOpacity>
  );

export default function HomeScreen() {
    const [text, setText] = useState('');
    const [selectedValue, setSelectedValue] = useState('Start Shop')


  return (
    <Container>
        <Navbar title="Home" onMenuPress={() => {/* Handle menu press */}} />
        <Logo />

        <NamedGreeting user="Kobby" />

        <Text className="text-2xl font-nunito-bold mb-3">Welcome to Your Fashion Shop Assistant!</Text>
        <Text className="text-base mb-5 font-nunito-regular">Hey there! Ready to take control of your fashion shop inventory? Here's what we can do together:</Text>
        
{/* 
        <TouchableOpacity className="bg-fuchsia-300 justify-center items-center py-2 rounded-full mb-3 shadow-xl shadow-black" onPress={() => navigation.navigate('Onboarding')}>
            <View className="flex-row justify-center items-center gap-4">
                <Text className=" text-slate-800 font-nunito-bold">Let's Get You Started</Text>
                <Ionicons name="rocket-sharp" size={24} color="white" />
            </View>
        </TouchableOpacity> */}

{/* 
        <ScrollView className="flex-1 bg-white my-5">
            <OptionItem icon="person-add-outline" label="Account Setup" onPress={() => {}} />
            <OptionItem icon="list-outline" label="Check out your current inventory" onPress={() => {}} />
            <OptionItem icon="pricetag-outline" label="Add fresh items to your collection" onPress={() => {}} />
            <OptionItem icon="cash-outline" label="Record a sale" onPress={() => {}} />
            <OptionItem icon="trending-down-outline" label="See what's running low and order more" onPress={() => {}} />
            <OptionItem icon="bar-chart-outline" label="View your sales reports and insights" onPress={() => {}} />
            <OptionItem icon="create-outline" label="Manage and update your product listings" onPress={() => {}} />
            <OptionItem icon="cloud-upload-outline" label="Safely store your data in the cloud" onPress={() => {}} />
            <OptionItem icon="help-circle-outline" label="Get support and learn tips & tricks" onPress={() => {}} />
            <OptionItem icon="settings-outline" label="Customize your app settings" onPress={() => {}} />
        </ScrollView> */}


    
    <View className="flex-row my-5">
      {/* Sidebar */}
      <View className="bg-red-200 w-16 flex-col rounded-full border border-gray-200 items-center shadow-lg shadow-black pt-8">
        <TouchableOpacity className="mb-8">
        {/* <View className="bg-red-300 w-12 h-12 rounded-full border border-red-100 shadow-lg shadow-black justify-center items-center"> */}
        <View className="justify-center items-center border-b border-slate-500 pb-5">
            <Text className="text-sm text-fuchsia-800 font-nunito-black">VS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="mb-8">
          <View className="justify-center items-center">
            {/* <Text className="text-gray-800">📅</Text> */}
            <Ionicons name='home' size={24} color="#1f2937" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="mb-8">
            <View className="justify-center items-center">
            {/* <Text className="text-gray-800">📥</Text> */}
            <Ionicons name='storefront-sharp' size={24} color="#1f2937" />
          </View>
        </TouchableOpacity> 

        <TouchableOpacity className="mb-8">
            <View className="justify-center items-center">
            {/* <Text className="text-gray-800">📥</Text> */}
            <Ionicons name='bar-chart' size={24} color="#1f2937" />
          </View>
        </TouchableOpacity> 

        <TouchableOpacity className="mb-8">
            <View className="justify-center items-center">
            {/* <Text className="text-gray-800">📥</Text> */}
            <Ionicons name='document-lock' size={24} color="#1f2937" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="mb-8">
            <View className="justify-center items-center mt-2">
            {/* <Text className="text-gray-800">📥</Text> */}
            <Ionicons name='phone-landscape-sharp' size={24} color="#1f2937" />
          </View>
        </TouchableOpacity> 

      </View>

      {/* Main Menu */}
      {/* <View className="flex-1 bg-gray-50 rounded-2xl border border-gray-100 mx-2 p-4"> */}
      <View className="flex-1 mx-2 p-4">
        <ScrollView className="">
          <Text className="text-lg text-fuchsia-800 font-nunito-bold my-4 border-b border-b-gray-200 pb-4 mb-8">Menu</Text>
          <TouchableOpacity className="mb-4">
            <Text className="text-base text-gray-800 font-nunito-bold mb-2">Home</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mb-4">
            <Text className="text-base text-gray-800 font-nunito-bold mb-4">New Arrivals</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mb-4">
            <Text className="text-base text-gray-800 font-nunito-bold mb-4">Sales Reports</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mb-4">
            <Text className="text-base text-gray-800 font-nunito-bold mb-4">Manage Products</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mb-4">
            <Text className="text-base text-gray-800 font-nunito-bold mb-2">Customer Service</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </View>

    </Container>
  )
}

//expo install expo-file-system
