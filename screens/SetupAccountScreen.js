import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { ChevronRight, ChevronLeft, CheckSquare } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';



import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';

const SetupAccountScreen = ({ navigation }) => {
  const [step, setStep] = useState(1);

  const [shopName, setShopName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrevious = () => setStep(prev => prev - 1);

  const handleSetup = () => {
    console.log({ shopName, ownerName, email, phone, address });
    navigation.navigate('Main');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            shopName={shopName}
            setShopName={setShopName}
            ownerName={ownerName}
            setOwnerName={setOwnerName}
          />
        );
      case 2:
        return (
          <Step2
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
        );
      case 3:
        return (
          <Step3
            address={address}
            setAddress={setAddress}
          />
        );
      default:
        return null;
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text className="text-3xl text-slate-700 font-nunito-black mb-2">Set Up Your Shop</Text>
        <Text className="text-base text-slate-500 font-nunito-bold mb-2">
          Please provide the following information to get started with your Fashion Shop Stock Management System.
        </Text>

        {renderStep()}

        <View
          style={[
            styles.buttonContainer,
            { justifyContent: step > 1 ? 'space-between' : 'flex-end' },
          ]}
        >
          {step > 1 && (

            <TouchableOpacity onPress={handlePrevious} className="rounded-full overflow-hidden my-2 shadow-lg shadow-black">
            <LinearGradient
              colors={['#bfc1c2', '#acacac', '#838996']}
              style={{paddingVertical:15,  paddingHorizontal: 20, alignItems: 'center'}}
            >
              <ChevronLeft color="#000000" size={24} />
            </LinearGradient>
            </TouchableOpacity>

          )}
          {step < 3 && (
              // colors={['#D3D3E3', '#C0C0C0', '#A9A9A9']}
              // colors={['#fecaca', '#fca5a5', '#f87171']}

            <TouchableOpacity onPress={handleNext} className="rounded-full overflow-hidden my-2 shadow-lg shadow-black">
              <LinearGradient colors={['#bfc1c2', '#acacac', '#838996']} style={{paddingVertical:15,  paddingHorizontal: 20, alignItems: 'center'}} >
                <ChevronRight color="#000000" size={24} />
              </LinearGradient>
            </TouchableOpacity>
          )}
          {step === 3 && (
            // <TouchableOpacity className="bg-fuchsia-300 py-2 px-10 rounded-full shadow-lg shadow-black flex-row" onPress={handleSetup}>
            //   {/* <Text className="text-sm text-slate-900 font-nunito-bold">Complete Setup</Text> */}
            //   <CheckSquare color="#000000" size={24} />
            // </TouchableOpacity>

            <TouchableOpacity onPress={handleSetup} className="rounded-full overflow-hidden my-2 shadow-lg shadow-black">
              <LinearGradient colors={['#bfc1c2', '#acacac', '#838996']} style={{paddingVertical:15,  paddingHorizontal: 20, alignItems: 'center'}} >
               <CheckSquare color="#000000" size={24} />
              </LinearGradient>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  stepContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  addressInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backButton: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default SetupAccountScreen;
