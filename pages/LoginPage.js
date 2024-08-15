import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = () => {
  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('../assets/font/Metropolis-Bold.otf'),
    'Metropolis-Medium': require('../assets/font/Metropolis-Medium.otf'),
  });

  const [formLogin, setForm] = useState({
    email: '',
    password: ''
  });

  const navigation = useNavigation();

  const onSubmit = async () => {
    if (formLogin.email && formLogin.password) {
      try {
        const userData = await AsyncStorage.getItem('user');
        console.log('Stored User Data:', userData); // Log data from AsyncStorage

        if (userData) {
          const { email, password } = JSON.parse(userData);

          if (formLogin.email === email && formLogin.password === password) {
            alert('Login Berhasil');
            navigation.navigate('Main');
          } else {
            alert('Login Gagal', 'Email atau password salah');
          }
        } else {
          alert('Login Gagal', 'Tidak ada data pengguna');
        }
      } catch (error) {
        alert('Terjadi kesalahan: ' + error.message);
      }
    } else {
      alert('Login Gagal', 'Semua field harus diisi');
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
      <Text style={[styles.title, { fontFamily: 'Metropolis-Bold' }]}>Login</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setForm({ ...formLogin, email: text })}
        value={formLogin.email}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setForm({ ...formLogin, password: text })}
        value={formLogin.password}
      />
      <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => navigation.navigate('Forgot')}>
        <Text style={[styles.forgotPasswordText, { fontFamily: 'Metropolis-Medium' }]}>
          Forgot Password? <Text style={styles.forgotPasswordLink}>→</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.socialLoginContainer}>
        <Text style={styles.orLoginWith}>Or Login With social media</Text>
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
  forgotPasswordContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 16,
  },
  forgotPasswordLink: {
    color: 'red',
  },
  loginButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  orLoginWith: {
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

export default LoginPage;
