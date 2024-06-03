import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

import { useFonts } from 'expo-font'
const App = () => {
  
  const [fontsLoaded, fontError] = useFonts({
    'Metro-Bold': require('./assets/font/Metropolis-Bold.otf'),
    'Metro-Medium': require('./assets/font/Metropolis-Medium.otf'),
    'Metro-Semibold': require('./assets/font/Metropolis-SemiBold.otf'),
    'Metro-Black': require('./assets/font/Metropolis-Black.otf'),


  });
      if (!fontsLoaded) return 
      <View>
          <Text>Font tidak ditemukan !</Text>
      </View>

  return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{ fontSize: 30}}>Font Biasa</Text>
        <Text style={{ fontFamily: 'Metro-Bold', fontSize: 30 }}>Metro Bold</Text>
        <Text style={{ fontFamily: 'Metro-Medium', fontSize: 30 }}>Metro Medium</Text>
        <Text style={{ fontFamily: 'Metro-Semibold', fontSize: 30 }}>Metro SemiBold</Text>
        <Text style={{ fontFamily: 'Metro-Black', fontSize: 30 }}>Metro Black</Text> 

      </View>
    )
}
export default App