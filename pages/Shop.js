import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';

// Import images
import MainImage from './assets/tampil.jpg';
import Image1 from './assets/set.jpg';
import Image2 from './assets/zet.jpg';
import Image3 from './assets/paket.jpg';
import Image4 from './assets/laz.jpg';

const Shop = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Main Image at the top */}
      <View style={styles.mainImageContainer}>
        <Image source={MainImage} style={styles.mainImage} />
      </View>

      {/* Section with horizontal slider */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Menu Lazunaku</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.item}>
            <Image source={Image1} style={styles.image} />
            <Text style={styles.itemText}>satu paket gratis es teh</Text>
            <Text style={styles.price}>Rp.15.000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image source={Image2} style={styles.image} />
            <Text style={styles.itemText}>satu paket </Text>
            <Text style={styles.price}>Rp.15.000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image source={Image3} style={styles.image} />
            <Text style={styles.itemText}>paket promo</Text>
            <Text style={styles.price}>Rp100.000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image source={Image4} style={styles.image} />
            <Text style={styles.itemText}>paket hemat</Text>
            <Text style={styles.price}>Rp20.000</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainImageContainer: {
    padding: 20,
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 24,
    marginHorizontal: 20,
    marginBottom: 10,
    color: '#4CAF50', // Warna hijau
    fontWeight: 'bold',
    fontFamily: 'Roboto', // Pastikan font tersedia di proyek Anda
  },
  item: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  itemText: {
    marginTop: 5,
    fontSize: 18,
    color: 'black', // Ubah warna teks menjadi hitam
    fontWeight: 'bold',
    fontFamily: 'Cochin', // Gunakan font yang lebih menarik
  },
  price: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    fontFamily: 'Roboto', // Pastikan font tersedia di proyek Anda
  },
});
