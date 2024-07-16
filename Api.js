import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/LoginPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homeaktif from './assets/Home-aktif.jpg';
import Homenonaktif from './assets/Home-non-aktif.jpg';
import Shopaktif from './assets/Shop-aktif.jpg';
import Shopnonaktif from './assets/Shop-non-aktif.jpg'
import Shop from './Shop';
import { AntDesign} from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Bag from './Bag';
import Profil from './Profil';
import Home from './Home';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Homeaktif : Homenonaktif}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Shopaktif : Shopnonaktif}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          tabBarIcon: ({ focused }) => (
            <SimpleLineIcons name='handbag' color={focused? "red":"gray" } size={30}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name='user' color={focused? "red":"gray" } size={30}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MyTabs} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;