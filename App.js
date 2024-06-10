import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import { Button } from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
      title="Login"
      onPress={() => navigation.navigate('Login')}
  />
    <Button
      title="SignUp"
      onPress={() => navigation.navigate('SignUp')}
  />
    <Button
      title="ForgotPassword"
      onPress={() => navigation.navigate('Forgot')}
  />
    </View>

  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Forgot" component={ForgotPasswordPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;