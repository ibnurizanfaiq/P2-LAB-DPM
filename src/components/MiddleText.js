import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MIddleText = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.centerText}>IBNU RIZAN FAIQ</Text>

      {/* Barisan kotak */}
      <View style={styles.boxContainer}>
        {/* Kotak 1 */}
        <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
        {/* Kotak 2 */}
        <View style={[styles.box, { backgroundColor: 'darkgrey' }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Warna abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row', // Tata letak horizontal
    justifyContent: 'space-between', // Jarak merata
    width: '80%', // Lebar kontainer kotak
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default MIddleText;
