import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Constants from 'expo-constants';

// Container Component
export const Container = ({ children, style }) => (
  <SafeAreaView 
    className={`flex-1 bg-red-100 ${Platform.OS === 'android' ? `pt-[${Constants.statusBarHeight}px]` : 'pt-0'}`}>
    {/* <LinearGradient
      colors={['#f3f4f6', '#ffffff', "#f9fafb"]}
      style={[styles.gradient, style]}
    > */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {children}
      </ScrollView>
    {/* </LinearGradient> */}
  </SafeAreaView>
);

  //f3f4f6
//f9fafb
//e5e7eb

// // Container Component
// export const Container = ({ children, style }) => (
//   <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         {children}
//       </ScrollView>
//   </SafeAreaView>
// );


// Header Component
export const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

// Footer Component
export const Footer = ({ text }) => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>{text}</Text>
  </View>
);


export const Logo = () => {
  return (
    <View className="flex flex-row justify-center items-center py-2 bg-red-200 border-r-2 border-l-2 border-l-fuchsia-800 border-r-fuchsia-900 rounded-r-full rounded-l-full shadow-xl shadow-black my-5">
      {/* Icon for representing stock management */}
      <View className="bg-red-300 p-2 justify-center items-center rounded-full border border-fuchsia-400 shadow-xl shadow-black">
        <Ionicons name="cart-outline" size={24} className="text-blue-500" />
      </View>
      
      {/* Text for the brand name */}
      <Text className="text-2xl font-nunito-black text-fuchsia-800 ml-2">
        V-Stoxs
      </Text>
    </View>
  );
};

// Navbar Component
export const Navbar = ({ title, onMenuPress }) => (
  <View className="flex-row justify-between items-center h-14 px-4 mt-5">
    <TouchableOpacity onPress={onMenuPress} className="p-1">
      <Ionicons name="menu-outline" size={24} color="black" />
    </TouchableOpacity>

    <View className="bg-red-200 border border-slate-200 rounded-full py-2 px-6">
        <Text className="text-sm font-nunito-semibold px-5">{title}</Text>
    </View>
  </View>
);

// Textbox Component
export const Textbox = ({ placeholder, value, onChangeText, ...props }) => (
  <TextInput
    style={styles.textbox}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    {...props}
  />
);

export const SearchInput = ({ placeholder, value, onChangeText}) => {
  return (
    <TextInput
        className="h-10 bg-red-200 border border-red-300 pl-3 mb-3 rounded-2xl"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
    />
  )
}


// Button Component
export const Button = ({ title, onPress, style, textStyle }) => (
  <TouchableOpacity className="bg-red-900 p-3 rounded-full shadow-xl shadow-black items-center mb-2" onPress={onPress}>
    <Text className="text-white text-base">{title}</Text>
  </TouchableOpacity>
);


// Picker Component
export const CustomPicker = ({ selectedValue, onValueChange, items }) => (
  <Picker
    selectedValue={selectedValue}
    onValueChange={onValueChange}
    style={styles.picker}
  >
    {items.map((item, index) => (
      <Picker.Item key={index} label={item.label} value={item.value} />
    ))}
  </Picker>
);


// Space Component
// A vertical margin
export const Space = ({ mv=1, mh=1 }) => {
    <View style = {{ marginVertical: {mv}, marginHorizontal: {mh} }} />
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
  //f3f4f6
//f9fafb
  gradient: {
    flex: 1,
    backgroundColor: "#f3f4f6"
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 14,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuButton: {
    padding: 5,
  },
  navbarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textbox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
});