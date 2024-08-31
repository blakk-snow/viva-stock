// App.js
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigators/AppNavigator';
import { AuthProvider } from './contexts/AuthContext';
import { initDatabase } from './database';

import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  Nunito_300Light_Italic,
  Nunito_400Regular_Italic,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold_Italic,
  Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito';

export default function App() {
  useEffect(() => {
    initDatabase().catch(console.error);
  }, []);

  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
    Nunito_300Light_Italic,
    Nunito_400Regular_Italic,
    Nunito_500Medium_Italic,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold_Italic,
    Nunito_900Black_Italic,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (error) {
        console.warn(error);
      } finally {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
          setAppIsReady(true);
        }
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!appIsReady) {
    return null;
  }

  return (
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
  );
};
