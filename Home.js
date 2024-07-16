import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Selamat Datang di Lazunaku</Text>

      <View style={styles.topSection}>
        <ImageBackground source={require('./assets/awal3.jpg')} style={styles.imageBackground}>
          
        </ImageBackground>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#000',
    paddingVertical: 10,
  },
  topSection: {
    flex: 1,
    marginVertical: 110,
  },
  marginTop: {
    marginTop: 30, 
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

