import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpPage = () => {
  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('../assets/font/Metropolis-Bold.otf'),
    'Metropolis-Medium': require('../assets/font/Metropolis-Medium.otf'),
  });

  const [formSignUp, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigation = useNavigation();

  const onSubmit = async () => {
    if (formSignUp.name && formSignUp.email && formSignUp.password) {
      try {
        await AsyncStorage.setItem('user', JSON.stringify({
          name: formSignUp.name,
          email: formSignUp.email,
          password: formSignUp.password
        }));
        alert('Sign Up Berhasil');
        navigation.navigate('Login');
        checkStoredData(); // Cek data yang tersimpan
      } catch (error) {
        alert('Terjadi kesalahan saat menyimpan data: ' + error.message);
      }
    } else {
      alert('Sign Up Gagal', 'Semua field harus diisi');
    }
  };

  const checkStoredData = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      console.log('Data pengguna yang tersimpan:', userData);
    } catch (error) {
      console.error('Gagal mengambil data: ' + error.message);
    }
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Font tidak ditemukan!</Text>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={['#ff7e5f', '#feb47b']}
      style={styles.container}
    >
      <Text style={[styles.title, { fontFamily: 'Metropolis-Bold' }]}>Sign Up</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setForm({ ...formSignUp, name: text })}
        value={formSignUp.name}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setForm({ ...formSignUp, email: text })}
        value={formSignUp.email}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setForm({ ...formSignUp, password: text })}
        value={formSignUp.password}
      />
      <TouchableOpacity style={styles.signUpButton} onPress={onSubmit}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.loginText, { fontFamily: 'Metropolis-Medium' }]}>
            Already have an account? <Text style={styles.loginLink}>→</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socialSignUpContainer}>
        <Text style={styles.orSignUpWith}>Or sign up with a social account</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/google.png')} style={styles.socialButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/facebook.png')} style={styles.socialButtonIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    color: 'red',
  },
  socialSignUpContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  orSignUpWith: {
    fontSize: 16,
    textAlign: 'center',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    alignItems: 'center',
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  socialButtonIcon: {
    width: 30,
    height: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
    color: 'red',
  },
});

export default SignUpPage;
