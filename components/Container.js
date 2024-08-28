import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Constants from 'expo-constants';

// Container Component
export const Container = ({ children, style }) => (
  <SafeAreaView style={styles.safeArea}>
    <LinearGradient
      colors={['#ceced4', '#d9d9df', '#cac9d0']}
      style={[styles.gradient, style]}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        {children}
      </ScrollView>
    </LinearGradient>
  </SafeAreaView>
);

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

// Navbar Component
export const Navbar = ({ title, onMenuPress }) => (
  <View style={styles.navbar}>
    <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
      <Ionicons name="menu-outline" size={24} color="black" />
    </TouchableOpacity>
    <Text style={styles.navbarTitle}>{title}</Text>
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

// Button Component
export const Button = ({ title, onPress, style, textStyle }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
  gradient: {
    flex: 1,
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
