import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from '../components/GradientButton';



const WelcomeScreen = ({ navigation }) => {
  const features = [
    { icon: '📊', title: 'Inventory Tracking', description: 'Keep track of all your products in real-time' },
    { icon: '💰', title: 'Sales Recording', description: 'Easily record and manage your daily sales' },
    { icon: '📈', title: 'Analytics', description: 'Get insights into your best-selling items and more' },
    { icon: '🔔', title: 'Low Stock Alerts', description: 'Never run out of stock with timely notifications' },
  ];

  return (
    <LinearGradient colors={['#F8F8FF', '#F5F5F5', '#DCDCDC']} style={styles.container}>
      <SafeAreaView className="flex-1">
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View className="items-center mb-8">
            <Image
              source={require('../assets/100.png')} // Make sure to add your logo image
              style={styles.logo}
              resizeMode="contain"
            />
            <Text className="text-2xl text-slate-800 text-center font-nunito-bold">Welcome to V-Stoxs</Text>
            <Text className="text-base text-slate-600 text-center font-nunito-medium">Your complete fashion inventory solution</Text>
          </View>

          <View className="w-full mb-7">
            <Text className="text-xl font-nunito-bold mb-4">Key Features</Text>
            {features.map((feature, index) => (
              <View key={index} className="flex-row items-center mb-5 border-b border-b-slate-200 pb-4">
                <Text style={styles.featureIcon}>{feature.icon}</Text>
                <View style={styles.featureText}>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDescription}>{feature.description}</Text>
                </View>
              </View>
            ))}
          </View>

          <TouchableOpacity className="bg-red-300 py-2 px-5 rounded-full shadow-lg shadow-black mb-5" onPress={() => navigation.navigate('AccountSetup')}>
            <Text className="text-xs text-slate-800 font-nunito-semibold">Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mb-10" onPress={() => navigation.navigate('Login')}>
            <Text className="text-blue-700 text-base font-nunito-regular">Already have an account? Log in</Text>
          </TouchableOpacity>
{/* 

          <GradientButton title="Get Started" /> */}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  featuresContainer: {
    width: '100%',
    marginBottom: 30,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  featureIcon: {
    fontSize: 30,
    marginRight: 15,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginLink: {
    marginTop: 10,
  },
  loginText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default WelcomeScreen;