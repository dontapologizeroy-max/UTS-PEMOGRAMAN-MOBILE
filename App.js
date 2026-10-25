import React from 'react';
import { View, Alert, StyleSheet, StatusBar, Platform } from 'react-native';
import InfoCard from './src/components/InfoCard';
import DirektoriMahasiswa from './src/screens/DirektoriMahasiswa';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Soal 1: InfoCard dirender 2x dengan title & status berbeda */}
      <InfoCard
        title="Mengerjakan Laporan Praktikum"
        status="selesai"
        onPress={() => Alert.alert('Detail', 'Mengerjakan Laporan Praktikum')}
      />
      <InfoCard
        title="Membuat Aplikasi React Native"
        status="proses"
        onPress={() => Alert.alert('Detail', 'Membuat Aplikasi React Native')}
      />

      {/* Soal 2: Pencarian real-time dengan FlatList */}
      <DirektoriMahasiswa />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 16 : 56,
  },
});
