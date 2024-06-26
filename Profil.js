import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const Profile = () => {
  const user = {
    name: "Syahrul Suhardi",
    email: "SyahrulS@mail.com",
    profilePicture: require('./assets/profilku.jpg') // Use require directly here
  };

  const menuItems = [
    { label: 'My orders', value: 'Already have 12 orders' },
    { label: 'Shipping addresses', value: '3 addresses' },
    { label: 'Payment methods', value: 'Visa **34' },
    { label: 'Promocodes', value: 'You have special promocodes' },
    { label: 'My reviews', value: 'Reviews for 4 items' },
    { label: 'Settings', value: 'Notifications, password' }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileHeaderText}>My Profile</Text>
      </View>
      <View style={styles.header}>
        <Image source={user.profilePicture} style={styles.profilePicture} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <View>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Text style={styles.menuValue}>{item.value}</Text>
            </View>
            <Text style={styles.menuArrow}>></Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  profileHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#888',
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuValue: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  menuArrow: {
    fontSize: 18,
    color: '#888',
  },
});
