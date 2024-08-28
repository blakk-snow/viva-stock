import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Button } from './components';
import { Ionicons } from '@expo/vector-icons';

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Text style={styles.title}>Welcome to Your Fashion Shop Assistant!</Text>
      <Text style={styles.subtitle}>Hey there! Ready to take control of your fashion shop inventory? Here's what we can do together:</Text>
      
      <Button 
        title="Let's get you started" 
        onPress={() => navigation.navigate('Onboarding')}
        icon={<Ionicons name="rocket-outline" size={24} color="white" />}
      />
      
      {/* Add more buttons for each option */}
      
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default WelcomeScreen;
