import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Shop = () => {
  return (
    <LinearGradient
      colors={['#ff7e5f', '#feb47b']} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.sectionTitle}>Menu Lazunaku</Text>
        </View>

        <View style={styles.mainImageContainer}>
          <Image
            source={require('../assets/tampil.jpg')}
            style={styles.mainImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Promo</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.itemsContainer}>
              <TouchableOpacity style={styles.item}>
                <Image
                  source={require('../assets/set.jpg')}
                  style={styles.image}
                />
                <Text style={styles.itemText}>Satu Paket+Es Teh</Text>
                <Text style={styles.price}>Rp.15.000</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <Image
                  source={require('../assets/zet.jpg')}
                  style={styles.image}
                />
                <Text style={styles.itemText}>Big Order</Text>
                <Text style={styles.price}>Rp.15.000</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <Image
                  source={require('../assets/paket.jpg')}
                  style={styles.image}
                />
                <Text style={styles.itemText}>Promo Syawalan</Text>
                <Text style={styles.price}>Rp100.000</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <Image
                  source={require('../assets/laz.jpg')}
                  style={styles.image}
                />
                <Text style={styles.itemText}>Paket Super Fresh</Text>
                <Text style={styles.price}>Rp20.000</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerContainer: {
    marginTop: 50,
    marginBottom: -20,
    alignItems: 'left',
  },
  sectionTitle: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  mainImageContainer: {
    marginBottom: -20,
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  section: {
    marginBottom: 20,
  },
  itemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: 'black',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
});
