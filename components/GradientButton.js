import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} className="rounded-full overflow-hidden my-2 shadow-lg shadow-black">
      <LinearGradient
        // colors={['#D3D3E3', '#C0C0C0', '#A9A9A9']}
        colors={['#bfc1c2', '#acacac', '#838996']}
        // colors={['#fecaca', '#fca5a5', '#f87171']}
        style={{paddingVertical:15,  paddingHorizontal: 20, alignItems: 'center'}}
      >
        <Text className="text-gray-900 text-xs font-nunito-bold">{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};



export default GradientButton;
