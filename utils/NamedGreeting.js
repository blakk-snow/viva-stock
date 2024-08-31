import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NamedGreeting = ({user}) => {

  const getGreeting = () => {
    const currentHour = new Date().getHours();
  
    const morningGreetings = [
      'Good morning,',
      'Woezor',
      'Akwaaba',
      'Omanye aba',
      'Maakye',
      'Ojekoo'
    ];
  
    const afternoonGreetings = [
      'Good afternoon',
      'Woezor',
      'Akwaaba',
      'Omanye aba',
      'Maaha o',
      'Oshwiee'
    ];
  
    const eveningGreetings = [
      'Good evening',
      'Akwaaba',
      'Omanye aba',
      'Mema wo adwo',
      'Naokoo'
    ];
  
    let greetings;
  
    if (currentHour >= 5 && currentHour < 12) {
      greetings = morningGreetings;
    } else if (currentHour >= 12 && currentHour < 18) {
      greetings = afternoonGreetings;
    } else {
      greetings = eveningGreetings;
    }
  
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    return randomGreeting;
  };
  

  return (
    <View className="justify-center items-center p-5">
        <Text className='text-3xl text-fuchsia-700 font-nunito-semibold'>{getGreeting()}, </Text>
        <Text className='text-3xl text-fuchsia-700 font-nunito-semibold'>{user}</Text>
    </View>
  );
};


export default NamedGreeting;
