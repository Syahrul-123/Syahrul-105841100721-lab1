import { StyleSheet, Text, View, Image, Button } from 'react-native';
import TextCustom from './Text';
import Image1 from './image';


const ButtonCustom = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white', // kolom
      justifyContent: 'center',
      alignItems:'flex-end', // baris
      flexDirection: 'row',

      marginBottom: 100,
    }}>
      <ButtonComponent backgroundColor= 'red' text='Login'/>
      <ButtonComponent backgroundColor= 'blue' text='Register'/>
      </View>
  )
}
const ButtonComponent = ({ backgroundColor, text}) => {
  return (
    <View style={{backgroundColor,
      width: 150,
      height: 70,
      borderRadius: 10,
      marginLeft:10
    }}>
      <Text style={{
        color: 'white',
      textAlign: 'center',
      lineHeight: 70,
      fontSize: 25,
      fontWeight: 'bold',
      }}>
        {text}
        </Text>
        </View> 
  )
}

export default ButtonCustom



