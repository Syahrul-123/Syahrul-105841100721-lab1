import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const ForgotPasswordPage = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
        </TouchableOpacity>
        <Text style={styles.title}>Forgot password
        </Text>
        <Text style={styles.description}>
          Please, enter your email address. You will receive a link to create a new password via email.
        </Text>
  
        <TextInput
          style={styles.input}
          placeholder="email2"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.errorText}>Not a valid email address. Should be your@email.com</Text>
  
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>SEND
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      paddingHorizontal: 30,
    },
    backButton: {
      position: 'absolute',
      top: 40,
      left: 20,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'left',
      alignSelf: 'flex-start',
    },
    description: {
      fontSize: 16,
      color: 'grey',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 50,
      borderColor: 'red',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    errorText: {
      color: 'red',
      marginBottom: 70,
    },
    sendButton: {
      width: '100%',
      height: 50,
      backgroundColor: 'red',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    sendButtonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  
  export default ForgotPasswordPage;