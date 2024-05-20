import { StyleSheet, Text, View, Image, Button } from "react-native";
const ButtonCustom = () => {
    return (
        <>
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center', 
      alignItems: 'flex-end', 
      flexDirection: 'row',
      marginBottom: 100,
    }}>
      <View style={{
        backgroundColor: 'red',
        width: 150,
        height: 70,
        borderRadius: 10,
        marginRight: 10
      }}>
        <Text style={{
          color: 'white',
          textAlign: 'center',
          lineHeight: 70,
          fontSize: 19,
          fontWeight: 'bold',
        }}>
          Login
        </Text>
      </View>
      <View style={{
        backgroundColor: 'black',
        width: 150,
        height: 70,
        borderRadius: 10,
        marginLeft: 10
      }}>
        <Text style={{
          color: 'white',
          textAlign: 'center',
          lineHeight: 70,
          fontSize: 19,
          fontWeight: 'bold',
        }}>
          Register
        </Text>
      </View>
    </View >
    </>
  );
}
       
export default ButtonCustom