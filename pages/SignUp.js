import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const SignUp = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
  
        <TextInput
          style={styles.input}
          placeholder="Name"
          autoCapitalize="none"
        />
  
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
  
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
  
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already have an account?</Text>
        </View>
  
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
        </TouchableOpacity>
  
        <Text style={styles.orText}>Or sign up with social account</Text>
  
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('./assets/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('./assets/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
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
    backButtonText: {
      fontSize: 30,
      color: 'black',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 40,
      textAlign: 'left',
      alignSelf: 'flex-start',
    },
    input: {
      width: '100%',
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    signUpButton: {
      width: '100%',
      height: 50,
      backgroundColor: 'red',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    signUpButtonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end', 
      alignItems: 'center',
      marginBottom: 50,
    },
    footerText: {
      color: 'black',
    },
    orText: {
      textAlign: 'center',
      marginBottom: 20, 
    },
    socialLoginContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
    },
    socialButton: {
      width: 50,
      height: 50,
      backgroundColor: '#ccc',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    socialIcon: {
      width: 25,
      height: 25,
    },
  });
  
  export default SignUp;