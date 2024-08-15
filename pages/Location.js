import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Location = () => {
  const { width } = Dimensions.get('window');

  // Data lokasi outlet
  const outlets = [
    {
      title: "Lazuna Chicken PK 7",
      description: "Jl. Perintis Kemerdekaan VII No.60A, Tamalanrea Indah, Kota Makassar",
      latitude: -5.136,
      longitude: 119.482525,
      rating: 4.4,
      reviews: 546
    },
    {
      title: "Lazuna Chicken Perdos",
      description: "Jl. P. Kemerdekaan VIII No.51a, Tamalanrea Jaya, Kota Makassar",
      latitude: -5.1409883416514175,
      longitude: 119.4955507806584,
      rating: 4.2,
      reviews: 445
    },
    {
      title: "Lazuna Chicken Paccerakkang",
      description: "Jl. Paccerakkang, Kota Makassar",
      latitude: -5.113877,
      longitude: 119.516825,
      rating: 4.5,
      reviews: 600
    },
    {
      title: "Lazuna Chicken Cabang BTP",
      description: "Jl. BTP, Kota Makassar",
      latitude: -5.1323481,
      longitude: 119.5018288,
      rating: 4.3,
      reviews: 500
    },
    {
      title: "Lazuna Chicken Tamalate",
      description: "Jl. Tamalate, Kota Makassar",
      latitude: -5.1679776,
      longitude: 119.4477005,
      rating: 4.6,
      reviews: 700
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {outlets.map((outlet, index) => (
        <View key={index} style={styles.outletContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{outlet.title}</Text>
          </TouchableOpacity>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: outlet.latitude,
              longitude: outlet.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          >
            <Marker
              coordinate={{ latitude: outlet.latitude, longitude: outlet.longitude }}
              title={outlet.title}
              description={`${outlet.description}\nRating: ${outlet.rating} (${outlet.reviews} reviews)`}
            />
          </MapView>
          <View style={styles.infoContainer}>
            <Text style={styles.description}>{outlet.description}</Text>
            <Text style={styles.rating}>Rating: {outlet.rating} ({outlet.reviews} reviews)</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  outletContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  map: {
    width: '100%',
    height: 200,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  rating: {
    fontSize: 16,
    color: '#888',
  },
});

export default Location;
