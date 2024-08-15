import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Profil from "./pages/Profil";
import Shop from "./pages/Shop";
import ForgotPage from "./pages/ForgotPage";
import Location from "./pages/Location";
import { AntDesign } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
 return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#F7E7A1" }, // Warna kuning lembut
      }}
    >
   <Tab.Screen
    name="Home"
    component={Home}
    options={{
     headerShown: false,
     tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "red" : "gray" }}>Home</Text>,
     tabBarIcon: ({ size, focused }) => (
      <AntDesign name="home" color={focused ? "red" : "gray"} size={size} />
     ),
    }}
   />
   <Tab.Screen
    name="Shop"
    component={Shop}
    options={{
     headerShown: false,
     tabBarLabel: ({ focused }) => (
      <Text style={{ color: focused ? "red" : "gray" }}>Menu</Text>
     ),
     tabBarIcon: ({ size, focused }) => (
      <MaterialIcons name="restaurant-menu" color={focused ? "red" : "gray"} size={size} />
     ),
    }}
   />
   <Tab.Screen
    name="Location"
    component={Location}
    options={{
     headerShown: false,
     tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "red" : "gray" }}>Location</Text>,
     tabBarIcon: ({ size, focused }) => (
      <MaterialIcons name="location-on" color={focused ? "red" : "gray"} size={size} />
     ),
    }}
   />
   <Tab.Screen
    name="Profile"
    component={Profil}
    options={{
     headerShown: false,
     tabBarLabel: ({ focused }) => (
      <Text style={{ color: focused ? "red" : "gray" }}>Profile</Text>
     ),
     tabBarIcon: ({ size, focused }) => (
      <AntDesign name="user" color={focused ? "red" : "gray"} size={size} />
     ),
    }}
   />
  </Tab.Navigator>
 );
}

function App() {
 return (
  <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name="SignUp" component={SignUpPage} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
    <Stack.Screen name="Forgot" component={ForgotPage} options={{ headerShown: false }} />
    <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
   </Stack.Navigator>
  </NavigationContainer>
 );
}

export default App;
