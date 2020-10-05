import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import Brands from './components/brandsToCrush';
import Nav from './components/navbar';
import NewCollection from './components/newCollection';

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <NewCollection />
        <Brands />
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  }
});
